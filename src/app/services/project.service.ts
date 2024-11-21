import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    createdAt: Date;
}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private projects: Project[] = [];
    private projectsSubject = new BehaviorSubject<Project[]>([]);
    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
        this.initializeProjects();
    }

    private initializeProjects(): void {
        if (this.isBrowser) {
            // Load projects from localStorage only in browser environment
            const savedProjects = localStorage.getItem('projects');
            if (savedProjects) {
                try {
                    this.projects = JSON.parse(savedProjects);
                    this.projectsSubject.next(this.projects);
                } catch (error) {
                    console.error('Error parsing saved projects:', error);
                    this.projects = [];
                }
            }
        }
    }

    getProjects(): Observable<Project[]> {
        return this.projectsSubject.asObservable();
    }

    addProject(project: Omit<Project, 'id'>): void {
        const newProject = {
            ...project,
            id: Date.now().toString(),
        };

        this.projects.push(newProject);
        this.updateProjects();
    }

    deleteProject(id: string): void {
        this.projects = this.projects.filter(project => project.id !== id);
        this.updateProjects();
    }

    private updateProjects(): void {
        if (this.isBrowser) {
            // Save to localStorage only in browser environment
            try {
                localStorage.setItem('projects', JSON.stringify(this.projects));
            } catch (error) {
                console.error('Error saving projects to localStorage:', error);
            }
        }
        // Update the BehaviorSubject
        this.projectsSubject.next([...this.projects]);
    }
} 