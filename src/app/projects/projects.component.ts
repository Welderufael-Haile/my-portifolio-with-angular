import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'my portifolio in next js',
      description: 'A full-stack e-commerce platform built with Angular and Node.js, featuring user authentication, product management, and payment integration.',
      image: 'assets/profil1.png',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      liveUrl: 'https://your-ecommerce-demo.com',
      githubUrl: 'https://github.com/yourusername/ecommerce-project'
    },
    {
      id: 2,
      title: 'food delivery web',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'assets/well.jpg',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'TailwindCSS','MONGO DB'],
      liveUrl: 'https://your-taskmanager-demo.com',
      githubUrl: 'https://github.com/yourusername/task-manager'
    },
    {
      id: 3,
      title: 'portifolio with angular',
      description: 'A weather forecasting application that provides real-time weather data, interactive maps, and detailed weather information.',
      image: 'assets/profile2.png',
      technologies: ['Angular', 'mongo db','TallwindCSS', 'TypeScript'],
      liveUrl: 'https://your-weather-demo.com',
      githubUrl: 'https://github.com/yourusername/weather-dashboard'
    }
    // Add more projects as needed
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateToProject(projectId: number): void {
    this.router.navigate(['/project', projectId]);
  }
}
