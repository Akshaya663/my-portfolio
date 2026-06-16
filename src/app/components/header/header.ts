import { Component, HostListener, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <ul class="nav-links">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#experience" class="nav-link">Experience</a></li>
        <li><a href="#skills" class="nav-link">Skills</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#education" class="nav-link">Education</a></li>
        <li><a href="#contact" class="nav-link btn-nav">Contact</a></li>
        <li>
          <button class="theme-toggle" (click)="themeService.toggleTheme()" aria-label="Toggle dark/light mode">
            @if (themeService.isDark()) {
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            }
          </button>
        </li>
      </ul>
      <button class="theme-toggle mobile-theme" (click)="themeService.toggleTheme()" aria-label="Toggle dark/light mode">
        @if (themeService.isDark()) {
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        } @else {
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        }
      </button>
      <button class="nav-toggle" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen" aria-label="Toggle menu">
        <span [class.open]="menuOpen"></span>
        <span [class.open]="menuOpen"></span>
        <span [class.open]="menuOpen"></span>
      </button>
      <ul class="nav-links-mobile" [class.open]="menuOpen">
        <li><a href="#about" (click)="toggleMenu()">About</a></li>
        <li><a href="#experience" (click)="toggleMenu()">Experience</a></li>
        <li><a href="#skills" (click)="toggleMenu()">Skills</a></li>
        <li><a href="#projects" (click)="toggleMenu()">Projects</a></li>
        <li><a href="#education" (click)="toggleMenu()">Education</a></li>
        <li><a href="#contact" (click)="toggleMenu()">Contact</a></li>
      </ul>
    </nav>
  `,
  styles: [
    `
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.2rem 3rem;
        background: transparent;
        z-index: 1000;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .navbar.scrolled {
        padding: 0.8rem 3rem;
        background: var(--bg-nav);
        backdrop-filter: blur(20px) saturate(180%);
        border-bottom: 1px solid var(--border-color);
        box-shadow: var(--shadow-md);
      }

      .nav-links {
        display: flex;
        list-style: none;
        gap: 0.5rem;
        margin: 0;
        padding: 0;
        align-items: center;
      }

      .nav-link {
        color: var(--text-secondary);
        text-decoration: none;
        font-weight: 500;
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        transition: all 0.3s;
        position: relative;
      }

      .nav-link:hover {
        color: var(--text-primary);
        background: var(--accent-bg);
      }

      .nav-link.btn-nav {
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        padding: 0.5rem 1.25rem;
      }

      .nav-link.btn-nav:hover {
        background: linear-gradient(135deg, #4f46e5, #7c3aed);
        transform: translateY(-1px);
        box-shadow: var(--shadow-accent);
      }

      /* Theme Toggle */
      .theme-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border-radius: 10px;
        border: 1px solid var(--accent-border);
        background: var(--accent-bg);
        color: var(--accent-light);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .theme-toggle:hover {
        background: var(--accent-primary);
        color: white;
        transform: translateY(-2px) rotate(15deg);
        box-shadow: var(--shadow-accent);
        border-color: var(--accent-primary);
      }

      .mobile-theme {
        display: none;
      }

      .nav-toggle {
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 6px;
        z-index: 1001;
      }

      .nav-toggle span {
        width: 22px;
        height: 2px;
        background: var(--text-primary);
        border-radius: 2px;
        transition: all 0.3s;
        transform-origin: center;
      }

      .nav-toggle span.open:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      .nav-toggle span.open:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
      }

      .nav-toggle span.open:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }

      .nav-links-mobile {
        display: none;
        list-style: none;
        padding: 0;
        margin: 0;
      }

      @media (max-width: 768px) {
        .navbar {
          padding: 1rem 1.5rem;
          justify-content: flex-end;
          gap: 0.75rem;
        }

        .navbar.scrolled {
          padding: 0.8rem 1.5rem;
        }

        .nav-links {
          display: none;
        }

        .mobile-theme {
          display: flex;
        }

        .nav-toggle {
          display: flex;
        }

        .nav-links-mobile {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-nav-mobile);
          backdrop-filter: blur(20px);
          flex-direction: column;
          padding: 1.5rem;
          gap: 0.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .nav-links-mobile.open {
          display: flex;
          animation: fadeInDown 0.3s ease;
        }

        .nav-links-mobile a {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 1.05rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          transition: all 0.3s;
        }

        .nav-links-mobile a:hover {
          color: var(--accent-light);
          background: var(--accent-bg);
        }
      }

      @media (max-width: 480px) {
        .navbar {
          padding: 0.8rem 1rem;
          gap: 0.5rem;
        }

        .navbar.scrolled {
          padding: 0.6rem 1rem;
        }

        .theme-toggle {
          width: 34px;
          height: 34px;
          border-radius: 8px;
        }

        .nav-links-mobile {
          padding: 1rem;
        }

        .nav-links-mobile a {
          font-size: 0.95rem;
          padding: 0.6rem 0.75rem;
        }
      }

      @media (max-width: 375px) {
        .navbar {
          padding: 0.7rem 0.75rem;
        }

        .theme-toggle {
          width: 32px;
          height: 32px;
        }

        .nav-toggle span {
          width: 20px;
        }
      }

      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `,
  ],
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  menuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
