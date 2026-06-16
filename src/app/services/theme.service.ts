import { Injectable, signal } from '@angular/core';

/**
 * ThemeService manages the application's dark/light mode state.
 *
 * Features:
 * - Persists user preference in localStorage
 * - Respects system preference (prefers-color-scheme) on first visit
 * - Applies theme via data-theme attribute on the document root
 * - Uses Angular signals for reactive state management
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme';

  /** Reactive signal indicating whether dark mode is active */
  readonly isDark = signal(true);

  constructor() {
    this.loadTheme();
  }

  /** Toggles between dark and light mode */
  toggleTheme(): void {
    this.isDark.set(!this.isDark());
    this.applyTheme();
    this.saveTheme();
  }

  /** Loads the saved theme preference or falls back to system preference */
  private loadTheme(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY);

    if (saved !== null) {
      this.isDark.set(saved === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDark.set(prefersDark);
    }

    this.applyTheme();
  }

  /** Applies the current theme to the DOM */
  private applyTheme(): void {
    document.documentElement.setAttribute(
      'data-theme',
      this.isDark() ? 'dark' : 'light'
    );
  }

  /** Persists theme preference to localStorage */
  private saveTheme(): void {
    localStorage.setItem(this.STORAGE_KEY, this.isDark() ? 'dark' : 'light');
  }
}
