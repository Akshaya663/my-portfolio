import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ExperienceComponent } from './components/experience/experience';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';
import { EducationComponent } from './components/education/education';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-about />
      <app-experience />
      <app-skills />
      <app-projects />
      <app-education />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: [
    `
      main {
        scroll-behavior: smooth;
      }
    `,
  ],
})
export class App {
  // Inject ThemeService to ensure it initializes on app start
  private themeService = inject(ThemeService);
}
