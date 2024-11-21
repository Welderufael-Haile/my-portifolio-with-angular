import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
}

interface OtherSkill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  frontendSkills: Skill[] = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'React', level: 70 },
    { name: 'TypeScript', level: 70 },
    { name: 'next js', level: 75 }
  ];

  backendSkills: Skill[] = [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'MongoDB', level: 95 },
    { name: 'SQL', level: 95 }
  ];

  toolsSkills: Skill[] = [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'Jenkins', level: 65 },
    { name: 'Webpack', level: 80 }
  ];

  otherSkills: OtherSkill[] = [
    { name: 'Agile Development', icon: 'fas fa-sync-alt' },
    { name: 'UI/UX Design', icon: 'fas fa-paint-brush' },
    { name: 'RESTful APIs', icon: 'fas fa-plug' },
    { name: 'Problem Solving', icon: 'fas fa-puzzle-piece' },
    { name: 'Team Leadership', icon: 'fas fa-users' },
    { name: 'Project Management', icon: 'fas fa-tasks' }
  ];

  ngOnInit() {
    // You could add animations here if needed
  }
}
