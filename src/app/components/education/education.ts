import { Component } from '@angular/core';
import { RESUME_DATA } from '../../data/resume-data';

/**
 * EducationComponent displays academic background
 * with institution, degree, and performance details.
 */
@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section class="education" id="education">
      <div class="section-header">
        <span class="section-tag">05. Education</span>
        <h2 class="section-title">Education</h2>
      </div>
      @for (edu of data.education; track edu.institution) {
        <div class="edu-card">
          <div class="edu-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>
            </svg>
          </div>
          <div class="edu-content">
            <h3 class="institution">{{ edu.institution }}</h3>
            <p class="degree">{{ edu.degree }}</p>
            <div class="edu-details">
              <span class="edu-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
                Graduated: {{ edu.graduated }}
              </span>
              <span class="edu-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {{ edu.location }}
              </span>
              <span class="edu-chip highlight">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                CGPA: {{ edu.cgpa }}
              </span>
            </div>
          </div>
        </div>
      }
    </section>
  `,
  styles: [
    `
      .education {
        padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 3rem);
        max-width: 900px;
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

      .edu-card {
        background: var(--bg-card);
        backdrop-filter: blur(10px);
        border: 1px solid var(--border-color);
        padding: 2rem;
        border-radius: 16px;
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }

      .edu-card::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: conic-gradient(from 0deg, transparent, var(--accent-primary), transparent, var(--accent-secondary), transparent);
        opacity: 0;
        animation: cardGlowShift 8s linear infinite;
        transition: opacity 0.4s ease;
        z-index: 0;
      }

      .edu-card::after {
        content: '';
        position: absolute;
        inset: 1px;
        background: var(--bg-card);
        border-radius: 15px;
        z-index: 0;
      }

      .edu-card > * {
        position: relative;
        z-index: 1;
      }

      .edu-card:hover::before {
        opacity: 0.5;
      }

      .edu-card:hover {
        border-color: var(--accent-border);
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
      }

      .edu-icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: var(--accent-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--accent-light);
        flex-shrink: 0;
      }

      .edu-content {
        flex: 1;
      }

      .institution {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-heading);
        margin: 0 0 0.4rem;
      }

      .degree {
        color: var(--text-secondary);
        margin: 0 0 1rem;
        line-height: 1.6;
      }

      .edu-details {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
      }

      .edu-chip {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        background: var(--accent-bg);
        border: 1px solid var(--border-color);
        color: var(--accent-text);
        padding: 0.35rem 0.75rem;
        border-radius: 8px;
        font-size: 0.8rem;
        font-weight: 500;
      }

      .edu-chip.highlight {
        background: var(--accent-border);
        border-color: var(--accent-primary);
        color: var(--accent-light);
      }

      @media (max-width: 768px) {
        .education {
          padding: 4rem 1.5rem;
        }

        .section-title {
          font-size: 1.8rem;
        }

        .edu-card {
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
        }

        .edu-details {
          flex-direction: column;
        }
      }

      @media (max-width: 480px) {
        .education {
          padding: 3rem 1rem;
        }

        .section-title {
          font-size: 1.6rem;
        }

        .edu-card {
          padding: 1.25rem;
          border-radius: 12px;
        }

        .institution {
          font-size: 1.05rem;
        }

        .degree {
          font-size: 0.85rem;
        }

        .edu-chip {
          font-size: 0.7rem;
          padding: 0.3rem 0.6rem;
        }

        .edu-icon {
          width: 40px;
          height: 40px;
        }
      }

      @media (max-width: 375px) {
        .education {
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

        .edu-card {
          padding: 1rem;
        }

        .institution {
          font-size: 0.95rem;
        }

        .degree {
          font-size: 0.8rem;
        }

        .edu-chip {
          font-size: 0.65rem;
        }
      }
    `,
  ],
})
export class EducationComponent {
  data = RESUME_DATA;
}
