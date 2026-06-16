import { Component } from '@angular/core';
import { RESUME_DATA } from '../../data/resume-data';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about" id="about">
      <div class="section-header">
        <span class="section-tag">01. About</span>
        <h2 class="section-title">About Me</h2>
      </div>
      <div class="about-grid">
        <div class="about-text">
          <p class="summary">{{ data.personal.summary }}</p>
          <div class="what-i-do">
            <h4 class="wid-title">What I bring to the table</h4>
            <div class="wid-items">
              <div class="wid-item">
                <div class="wid-icon">⚡</div>
                <div>
                  <h5>Enterprise Development</h5>
                  <p>Building scalable .NET applications that serve thousands of users in production.</p>
                </div>
              </div>
              <div class="wid-item">
                <div class="wid-icon">☁️</div>
                <div>
                  <h5>Cloud & DevOps</h5>
                  <p>Designing AWS infrastructure and CI/CD pipelines for fast, reliable deployments.</p>
                </div>
              </div>
              <div class="wid-item">
                <div class="wid-icon">🎯</div>
                <div>
                  <h5>Product Thinking</h5>
                  <p>Turning business needs into technical roadmaps with a user-first approach.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-sidebar">
          <div class="about-cards">
            <div class="info-card">
              <div class="card-icon">📍</div>
              <span class="card-label">Location</span>
              <span class="card-value">{{ data.personal.location }}</span>
            </div>
            <div class="info-card">
              <div class="card-icon">💼</div>
              <span class="card-label">Experience</span>
              <span class="card-value">3.5+ Years</span>
            </div>
            <div class="info-card">
              <div class="card-icon">🎓</div>
              <span class="card-label">Education</span>
              <span class="card-value">B.Tech ECE</span>
            </div>
            <div class="info-card">
              <div class="card-icon">🌐</div>
              <span class="card-label">Languages</span>
              <span class="card-value">{{ data.languages.join(', ') }}</span>
            </div>
          </div>
          <div class="soft-skills">
            <h4 class="ss-title">Core Strengths</h4>
            <div class="ss-list">
              @for (skill of data.softSkills; track skill) {
                <div class="ss-item">
                  <span class="ss-icon">✦</span>
                  <span>{{ skill }}</span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .about {
        padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 3rem);
        max-width: 1100px;
        margin: 0 auto;
      }

      .section-header {
        margin-bottom: 3rem;
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

      .about-grid {
        display: grid;
        grid-template-columns: 1.3fr 0.7fr;
        gap: clamp(1.5rem, 3vw, 3rem);
        align-items: start;
      }

      .summary {
        font-size: 1.05rem;
        color: var(--text-secondary);
        line-height: 1.9;
        margin: 0 0 2.5rem;
      }

      .what-i-do {
        margin-top: 0;
      }

      .wid-title {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0 0 1.25rem;
      }

      .wid-items {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }

      .wid-item {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
      }

      .wid-icon {
        font-size: 1.3rem;
        flex-shrink: 0;
        margin-top: 2px;
      }

      .wid-item h5 {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0 0 0.3rem;
      }

      .wid-item p {
        font-size: 0.9rem;
        color: var(--text-muted);
        margin: 0;
        line-height: 1.6;
      }

      .about-sidebar {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .about-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
      }

      .info-card {
        background: var(--bg-card);
        backdrop-filter: blur(10px);
        border: 1px solid var(--border-color);
        padding: 1.1rem;
        border-radius: 14px;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }

      .info-card::before {
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

      .info-card::after {
        content: '';
        position: absolute;
        inset: 1px;
        background: var(--bg-card);
        border-radius: 13px;
        z-index: -1;
      }

      .info-card:hover::before {
        opacity: 0.6;
      }

      .info-card:hover {
        border-color: var(--accent-border);
        transform: translateY(-3px);
        box-shadow: var(--shadow-md);
      }

      .card-icon {
        font-size: 1.3rem;
        margin-bottom: 0.15rem;
      }

      .card-label {
        font-size: 0.7rem;
        color: var(--text-muted);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .card-value {
        color: var(--text-primary);
        font-weight: 600;
        font-size: 0.9rem;
      }

      .soft-skills {
        background: var(--bg-card);
        border: 1px solid var(--border-subtle);
        border-radius: 14px;
        padding: 1.25rem;
      }

      .ss-title {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0 0 0.75rem;
      }

      .ss-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .ss-item {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        color: var(--text-secondary);
        font-size: 0.85rem;
      }

      .ss-icon {
        color: var(--accent-primary);
        font-size: 0.7rem;
      }

      @media (max-width: 768px) {
        .about {
          padding: 4rem 1.5rem;
        }

        .section-title {
          font-size: 1.8rem;
        }

        .about-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .about-cards {
          grid-template-columns: 1fr 1fr;
        }

        .summary {
          font-size: 0.95rem;
        }
      }

      @media (max-width: 480px) {
        .about {
          padding: 3rem 1rem;
        }

        .section-title {
          font-size: 1.6rem;
        }

        .about-cards {
          grid-template-columns: 1fr;
        }

        .summary {
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }

        .wid-title {
          font-size: 1rem;
        }

        .wid-item h5 {
          font-size: 0.9rem;
        }

        .wid-item p {
          font-size: 0.8rem;
        }

        .info-card {
          padding: 0.9rem;
        }

        .card-value {
          font-size: 0.8rem;
        }
      }

      @media (max-width: 375px) {
        .about {
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

        .summary {
          font-size: 0.85rem;
          line-height: 1.7;
        }

        .wid-item {
          gap: 0.75rem;
        }

        .wid-icon {
          font-size: 1.1rem;
        }

        .soft-skills {
          padding: 1rem;
        }

        .ss-item {
          font-size: 0.8rem;
        }
      }
    `,
  ],
})
export class AboutComponent {
  data = RESUME_DATA;
}
