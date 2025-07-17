import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header/header.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { EducationComponent } from './app/components/education/education.component';
import { ContactComponent } from './app/components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent
  ],
  template: `
    <div class="portfolio-app">
      <app-header></app-header>
      <app-experience></app-experience>
      <app-skills></app-skills>
      <app-education></app-education>
      <app-contact></app-contact>
    </div>
  `,
  styles: [`
    .portfolio-app {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      line-height: 1.6;
    }
  `]
})
export class App {}

bootstrapApplication(App);