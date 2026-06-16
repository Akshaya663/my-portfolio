import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-content">
        <p class="footer-text">Designed & Built by Akshaya Rachabattula</p>
        <p class="footer-sub">Built with Angular • 2024</p>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        text-align: center;
        padding: 3rem 2rem;
        border-top: 1px solid var(--border-subtle);
      }

      .footer-content {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }

      .footer-text {
        margin: 0;
        font-size: 0.9rem;
        color: var(--text-secondary);
        font-weight: 500;
      }

      .footer-sub {
        margin: 0;
        font-size: 0.8rem;
        color: var(--text-muted);
      }
    `,
  ],
})
export class FooterComponent {}
