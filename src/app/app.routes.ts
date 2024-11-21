import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: 'about', pathMatch: 'full' },
];
