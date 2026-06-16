import { Component } from '@angular/core';
import { RESUME_DATA } from '../../data/resume-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="contact" id="contact">
      <div class="section-header">
        <span class="section-tag">06. Contact</span>
        <h2 class="section-title">Get In Touch</h2>
      </div>
      <p class="contact-intro">
        I'm currently open to new opportunities and collaborations. Whether you have a question or
        just want to say hi, feel free to reach out!
      </p>
      <div class="contact-grid">
        <a [href]="'mailto:' + data.personal.email" class="contact-card">
          <div class="card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <span class="card-label">Email</span>
          <span class="card-value">{{ data.personal.email }}</span>
        </a>
        <a [href]="'tel:' + data.personal.phone" class="contact-card">
          <div class="card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <span class="card-label">Phone</span>
          <span class="card-value">{{ data.personal.phone }}</span>
        </a>
        <a [href]="data.personal.linkedin" target="_blank" rel="noopener" class="contact-card">
          <div class="card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <span class="card-label">LinkedIn</span>
          <span class="card-value">akshaya-rachabattula</span>
        </a>
        <div class="contact-card">
          <div class="card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <span class="card-label">Location</span>
          <span class="card-value">{{ data.personal.location }}</span>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .contact {
        padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 3rem);
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
      }

      .section-header {
        margin-bottom: 1.5rem;
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

      .contact-intro {
        color: var(--text-secondary);
        font-size: 1.05rem;
        line-height: 1.8;
        max-width: 520px;
        margin: 0 auto 3rem;
      }

      .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
        gap: 1.25rem;
      }

      .contact-card {
        background: var(--bg-card);
        backdrop-filter: blur(10px);
        border: 1px solid var(--border-subtle);
        padding: 1.75rem 1.25rem;
        border-radius: 16px;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.6rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }

      .contact-card::before {
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

      .contact-card::after {
        content: '';
        position: absolute;
        inset: 1px;
        background: var(--bg-card);
        border-radius: 15px;
        z-index: 0;
      }

      .contact-card > * {
        position: relative;
        z-index: 1;
      }

      .contact-card:hover::before {
        opacity: 0.55;
      }

      .contact-card:hover {
        border-color: var(--accent-border);
        transform: translateY(-6px);
        box-shadow: var(--shadow-md);
      }

      .card-icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: var(--accent-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--accent-light);
        margin-bottom: 0.25rem;
      }

      .card-label {
        font-size: 0.75rem;
        color: var(--text-muted);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .card-value {
        color: var(--text-primary);
        font-weight: 500;
        font-size: 0.9rem;
        word-break: break-all;
        text-align: center;
      }

      @media (max-width: 768px) {
        .contact {
          padding: 4rem 1.5rem;
        }

        .section-title {
          font-size: 1.8rem;
        }

        .contact-grid {
          grid-template-columns: 1fr 1fr;
        }

        .contact-intro {
          font-size: 0.95rem;
        }
      }

      @media (max-width: 480px) {
        .contact {
          padding: 3rem 1rem;
        }

        .section-title {
          font-size: 1.6rem;
        }

        .contact-grid {
          grid-template-columns: 1fr;
        }

        .contact-card {
          padding: 1.25rem 1rem;
          border-radius: 12px;
        }

        .contact-intro {
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }

        .card-value {
          font-size: 0.8rem;
        }
      }

      @media (max-width: 375px) {
        .contact {
          padding: 2.5rem 0.75rem;
        }

        .section-header {
          margin-bottom: 1rem;
        }

        .section-tag {
          font-size: 0.75rem;
        }

        .section-title {
          font-size: 1.4rem;
        }

        .contact-intro {
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
        }

        .contact-card {
          padding: 1rem 0.75rem;
        }

        .card-icon {
          width: 38px;
          height: 38px;
        }

        .card-value {
          font-size: 0.75rem;
        }

        .contact-grid {
          gap: 0.75rem;
        }
      }
    `,
  ],
})
export class ContactComponent {
  data = RESUME_DATA;
}
