import { Component } from '@angular/core';
import { RESUME_DATA } from '../../data/resume-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section class="experience" id="experience">
      <div class="section-header">
        <span class="section-tag">02. Experience</span>
        <h2 class="section-title">Where I've Worked</h2>
      </div>
      <div class="timeline">
        @for (exp of data.experience; track exp.company; let i = $index) {
          <div class="timeline-item">
            <div class="timeline-line">
              <div class="timeline-dot">
                <div class="dot-inner"></div>
              </div>
            </div>
            <div class="timeline-content">
              <div class="content-card">
                <div class="card-header">
                  <div class="header-left">
                    <h3 class="role">{{ exp.role }}</h3>
                    <p class="company">
                      <span class="at">@</span> {{ exp.company }}
                    </p>
                  </div>
                  <div class="header-right">
                    <span class="duration-badge">{{ exp.duration }}</span>
                    <span class="location">{{ exp.location }}</span>
                  </div>
                </div>
                <ul class="highlights">
                  @for (item of exp.highlights; track item) {
                    <li>
                      <span class="highlight-arrow">→</span>
                      <span>{{ item }}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .experience {
        padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 3rem);
        max-width: 1000px;
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

      .timeline {
        position: relative;
      }

      .timeline-item {
        display: flex;
        gap: 2rem;
      }

      .timeline-line {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
      }

      .timeline-dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--accent-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-top: 1.5rem;
      }

      .dot-inner {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--accent-primary);
        box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
      }

      .timeline-line::after {
        content: '';
        flex: 1;
        width: 2px;
        background: linear-gradient(to bottom, var(--accent-primary), transparent);
        margin-top: 0.5rem;
      }

      .timeline-content {
        flex: 1;
        padding-bottom: 2rem;
      }

      .content-card {
        background: var(--bg-card);
        backdrop-filter: blur(10px);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 1.75rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }

      .content-card::before {
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
        z-index: -1;
      }

      .content-card::after {
        content: '';
        position: absolute;
        inset: 1px;
        background: var(--bg-card);
        border-radius: 15px;
        z-index: -1;
      }

      .content-card:hover::before {
        opacity: 0.5;
      }

      .content-card:hover {
        border-color: var(--accent-border);
        box-shadow: var(--shadow-md);
        transform: translateX(4px);
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .role {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--text-heading);
        margin: 0;
      }

      .company {
        color: var(--accent-light);
        font-weight: 500;
        margin: 0.3rem 0 0;
        font-size: 1.05rem;
      }

      .at {
        color: var(--accent-primary);
        font-weight: 600;
      }

      .header-right {
        text-align: right;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        align-items: flex-end;
      }

      .duration-badge {
        background: var(--accent-bg);
        border: 1px solid var(--accent-border);
        color: var(--accent-text);
        font-size: 0.8rem;
        font-weight: 500;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
      }

      .location {
        color: var(--text-muted);
        font-size: 0.85rem;
      }

      .highlights {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }

      .highlights li {
        display: flex;
        gap: 0.75rem;
        color: var(--text-secondary);
        line-height: 1.7;
        font-size: 0.95rem;
      }

      .highlight-arrow {
        color: var(--accent-primary);
        flex-shrink: 0;
        font-weight: 600;
        margin-top: 2px;
      }

      @media (max-width: 768px) {
        .experience {
          padding: 4rem 1.5rem;
        }

        .section-title {
          font-size: 1.8rem;
        }

        .timeline-item {
          gap: 1rem;
        }

        .card-header {
          flex-direction: column;
        }

        .header-right {
          text-align: left;
          align-items: flex-start;
        }

        .timeline-line {
          display: none;
        }

        .content-card {
          padding: 1.25rem;
        }
      }

      @media (max-width: 480px) {
        .experience {
          padding: 3rem 1rem;
        }

        .section-title {
          font-size: 1.6rem;
        }

        .role {
          font-size: 1.05rem;
        }

        .company {
          font-size: 0.9rem;
        }

        .highlights li {
          font-size: 0.85rem;
          gap: 0.5rem;
        }

        .content-card {
          padding: 1rem;
          border-radius: 12px;
        }

        .duration-badge {
          font-size: 0.7rem;
        }
      }

      @media (max-width: 375px) {
        .experience {
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

        .role {
          font-size: 1rem;
        }

        .highlights li {
          font-size: 0.8rem;
          line-height: 1.6;
        }

        .content-card {
          padding: 0.85rem;
        }

        .card-header {
          margin-bottom: 1rem;
        }
      }
    `,
  ],
})
export class ExperienceComponent {
  data = RESUME_DATA;
}
