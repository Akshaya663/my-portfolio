import { Component } from '@angular/core';
import { RESUME_DATA } from '../../data/resume-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="projects" id="projects">
      <div class="section-header">
        <span class="section-tag">04. Projects</span>
        <h2 class="section-title">Projects & Internships</h2>
      </div>
      <div class="projects-grid">
        @for (project of data.projects; track project.company) {
          <div class="project-card">
            <div class="card-top-bar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="folder-icon">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
              <span class="project-duration">{{ project.duration }}</span>
            </div>
            <h3 class="project-company">{{ project.company }}</h3>
            <p class="project-role">{{ project.role }}</p>
            <p class="project-location">{{ project.location }}</p>
            <ul class="project-highlights">
              @for (item of project.highlights; track item) {
                <li>
                  <span class="bullet">→</span>
                  <span>{{ item }}</span>
                </li>
              }
            </ul>
          </div>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .projects {
        padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 3rem);
        max-width: 1100px;
        margin: 0 auto;
      }

      .section-header {
        margin-bottom: clamp(2rem, 3vw, 3rem);
      }

      .section-tag {
        display: inline-block;
        font-family: 'Fira Code', monospace;
        font-size: 0.85rem;
        color: var(--accent-primary);
        font-weight: 500;
        margin-bottom: 0.5rem;
      }

      .section-title {
        font-size: clamp(1.5rem, 3vw, 2.2rem);
        font-weight: 800;
        color: var(--text-heading);
      }

      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
        gap: 1.5rem;
      }

      .project-card {
        background: var(--bg-card);
        backdrop-filter: blur(10px);
        border: 1px solid var(--border-subtle);
        padding: 1.75rem;
        border-radius: 16px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
      }

      .project-card::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: conic-gradient(from 0deg, transparent, var(--accent-secondary), transparent, var(--accent-primary), transparent);
        opacity: 0;
        animation: cardGlowShift 8s linear infinite;
        transition: opacity 0.4s ease;
        z-index: 0;
      }

      .project-card::after {
        content: '';
        position: absolute;
        inset: 1px;
        background: var(--bg-card);
        border-radius: 15px;
        z-index: 0;
      }

      .project-card > * {
        position: relative;
        z-index: 1;
      }

      .project-card:hover::before {
        opacity: 0.55;
      }

      .project-card:hover {
        border-color: var(--accent-border);
        transform: translateY(-6px);
        box-shadow: var(--shadow-lg);
      }

      .card-top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.25rem;
      }

      .folder-icon {
        color: var(--accent-primary);
      }

      .project-duration {
        font-size: 0.8rem;
        color: var(--text-secondary);
        font-weight: 500;
        background: var(--accent-bg);
        padding: 0.25rem 0.7rem;
        border-radius: 20px;
        border: 1px solid var(--border-color);
      }

      .project-company {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--text-heading);
        margin: 0 0 0.3rem;
      }

      .project-role {
        color: var(--accent-light);
        font-weight: 500;
        margin: 0 0 0.2rem;
        font-size: 0.95rem;
      }

      .project-location {
        color: var(--text-muted);
        font-size: 0.85rem;
        margin: 0 0 1.25rem;
      }

      .project-highlights {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex: 1;
      }

      .project-highlights li {
        display: flex;
        gap: 0.75rem;
        color: var(--text-secondary);
        line-height: 1.7;
        font-size: 0.9rem;
      }

      .bullet {
        color: var(--accent-primary);
        flex-shrink: 0;
        font-weight: 600;
        margin-top: 2px;
      }

      @media (max-width: 768px) {
        .projects {
          padding: 4rem 1.5rem;
        }

        .section-title {
          font-size: 1.8rem;
        }

        .projects-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 480px) {
        .projects {
          padding: 3rem 1rem;
        }

        .section-title {
          font-size: 1.6rem;
        }

        .project-card {
          padding: 1.25rem;
          border-radius: 12px;
        }

        .project-company {
          font-size: 1.05rem;
        }

        .project-role {
          font-size: 0.85rem;
        }

        .project-highlights li {
          font-size: 0.8rem;
          gap: 0.5rem;
        }

        .project-duration {
          font-size: 0.7rem;
        }
      }

      @media (max-width: 375px) {
        .projects {
          padding: 2.5rem 0.75rem;
        }

        .section-header {
          margin-bottom: 2rem;
        }

        .section-tag {
          font-size: 0.75rem;
        }

        .section-title {
          font-size: 1.4rem;
        }

        .project-card {
          padding: 1rem;
        }

        .project-company {
          font-size: 1rem;
        }

        .project-highlights li {
          font-size: 0.75rem;
          line-height: 1.6;
        }

        .projects-grid {
          gap: 1rem;
        }
      }
    `,
  ],
})
export class ProjectsComponent {
  data = RESUME_DATA;
}
