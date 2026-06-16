import { Component } from '@angular/core';
import { RESUME_DATA } from '../../data/resume-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="skills" id="skills">
      <div class="section-header">
        <span class="section-tag">03. Skills</span>
        <h2 class="section-title">My Tech Stack</h2>
      </div>
      <div class="skills-grid">
        @for (category of data.skills; track category.category; let i = $index) {
          <div class="skill-card" [style.animation-delay]="i * 0.1 + 's'">
            <div class="card-top">
              <div class="card-number">0{{ i + 1 }}</div>
              <h3 class="skill-category">{{ category.category }}</h3>
            </div>
            <div class="skill-chips">
              @for (skill of category.skills; track skill) {
                <span class="chip">{{ skill }}</span>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .skills {
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

      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
        gap: 1.25rem;
        margin-bottom: clamp(2rem, 4vw, 4rem);
      }

      .skill-card {
        background: var(--bg-card);
        backdrop-filter: blur(10px);
        border: 1px solid var(--border-subtle);
        padding: 1.5rem;
        border-radius: 16px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }

      .skill-card::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: conic-gradient(from 0deg, transparent, var(--accent-primary), transparent, var(--accent-tertiary), transparent);
        opacity: 0;
        animation: cardGlowShift 8s linear infinite;
        transition: opacity 0.4s ease;
        z-index: 0;
      }

      .skill-card::after {
        content: '';
        position: absolute;
        inset: 1px;
        background: var(--bg-card);
        border-radius: 15px;
        z-index: 0;
      }

      .skill-card > * {
        position: relative;
        z-index: 1;
      }

      .skill-card:hover::before {
        opacity: 0.6;
      }

      .skill-card:hover {
        border-color: var(--accent-border);
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
      }

      .card-top {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.25rem;
      }

      .card-number {
        font-family: 'Fira Code', monospace;
        font-size: 0.75rem;
        color: var(--accent-primary);
        font-weight: 600;
        background: var(--accent-bg);
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
      }

      .skill-category {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0;
      }

      .skill-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }

      .chip {
        background: var(--accent-bg);
        color: var(--accent-text);
        padding: 0.35rem 0.75rem;
        border-radius: 8px;
        font-size: 0.8rem;
        font-weight: 500;
        border: 1px solid var(--border-color);
        transition: all 0.2s;
      }

      .chip:hover {
        background: var(--accent-border);
        border-color: var(--accent-primary);
        color: var(--accent-light);
      }

      .certifications-section {
        margin-top: 1rem;
      }

      .subsection-title {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--text-heading);
        margin: 0 0 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .title-icon {
        font-size: 1.4rem;
      }

      .cert-grid {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .cert-card {
        display: flex;
        align-items: center;
        gap: 1rem;
        background: var(--bg-card);
        backdrop-filter: blur(10px);
        border: 1px solid var(--border-subtle);
        padding: 1rem 1.25rem;
        border-radius: 12px;
        transition: all 0.3s;
      }

      .cert-card:hover {
        border-color: var(--accent-border);
        transform: translateX(4px);
      }

      .cert-badge {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: var(--accent-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--accent-light);
        flex-shrink: 0;
      }

      .cert-text {
        color: var(--text-primary);
        font-weight: 500;
        font-size: 0.95rem;
      }

      @media (max-width: 768px) {
        .skills {
          padding: 4rem 1.5rem;
        }

        .section-title {
          font-size: 1.8rem;
        }

        .skills-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 480px) {
        .skills {
          padding: 3rem 1rem;
        }

        .section-title {
          font-size: 1.6rem;
        }

        .skill-card {
          padding: 1.25rem;
          border-radius: 12px;
        }

        .skill-category {
          font-size: 0.9rem;
        }

        .chip {
          font-size: 0.7rem;
          padding: 0.3rem 0.6rem;
        }
      }

      @media (max-width: 375px) {
        .skills {
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

        .skill-card {
          padding: 1rem;
        }

        .card-top {
          margin-bottom: 1rem;
        }

        .chip {
          font-size: 0.65rem;
          padding: 0.25rem 0.5rem;
        }

        .skills-grid {
          gap: 1rem;
          margin-bottom: 2rem;
        }
      }
    `,
  ],
})
export class SkillsComponent {
  data = RESUME_DATA;
}
