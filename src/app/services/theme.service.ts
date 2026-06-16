import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme';
  isDark = signal(true);

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    this.isDark.set(!this.isDark());
    this.applyTheme();
    this.saveTheme();
  }

  private loadTheme(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved !== null) {
      this.isDark.set(saved === 'dark');
    } else {
      // Respect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDark.set(prefersDark);
    }
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.setAttribute(
      'data-theme',
      this.isDark() ? 'dark' : 'light'
    );
  }

  private saveTheme(): void {
    localStorage.setItem(this.STORAGE_KEY, this.isDark() ? 'dark' : 'light');
  }
}
