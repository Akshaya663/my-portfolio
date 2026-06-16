import { Component, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RESUME_DATA } from '../../data/resume-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero" id="hero">
      <!-- SVG filter for illustrated look -->
      <svg class="svg-filters" aria-hidden="true">
        <defs>
          <filter id="illustrated">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
            <feColorMatrix in="blur" type="saturate" values="0.7" result="desat" />
            <feComponentTransfer in="desat" result="posterize">
              <feFuncR type="discrete" tableValues="0 0.1 0.3 0.5 0.7 0.9 1" />
              <feFuncG type="discrete" tableValues="0 0.1 0.3 0.5 0.7 0.9 1" />
              <feFuncB type="discrete" tableValues="0 0.1 0.3 0.5 0.7 0.9 1" />
            </feComponentTransfer>
            <feComponentTransfer in="posterize">
              <feFuncR type="linear" slope="1.1" intercept="0.02" />
              <feFuncG type="linear" slope="1.1" intercept="0.02" />
              <feFuncB type="linear" slope="1.1" intercept="0.02" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      <!-- Animated particle canvas -->
      <canvas #particleCanvas class="particle-canvas"></canvas>

      <!-- Decorative background elements -->
      <div class="hero-bg-decoration">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
        <div class="grid-pattern"></div>
        <div class="glow-line glow-line-1"></div>
        <div class="glow-line glow-line-2"></div>
      </div>

      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Available for opportunities
        </div>
        <p class="greeting">Hello, I'm</p>
        <h1 class="name">
          <span class="name-line">{{ firstName }}</span>
          <span class="name-line highlight">{{ lastName }}</span>
        </h1>
        <p class="title">{{ data.personal.title }}</p>
        <div class="cta-buttons">
          <a href="#contact" class="btn btn-primary">
            <span>Get In Touch</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#experience" class="btn btn-glass">
            <span>View My Work</span>
          </a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">3.5+</span>
            <span class="stat-label">Years Exp.</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">8+</span>
            <span class="stat-label">Tech Skills</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">3</span>
            <span class="stat-label">Companies</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="visual-container">
          <div class="ring ring-outer"></div>
          <div class="ring ring-inner"></div>
          <div class="ring ring-pulse"></div>
          <div class="avatar-core">
            <img src="profile.png" alt="Akshaya Rachabattula" class="avatar-img" />
          </div>
          <!-- Floating tech icons -->
          <div class="floating-badge badge-1">.NET</div>
          <div class="floating-badge badge-2">AWS</div>
          <div class="floating-badge badge-3">C#</div>
          <div class="floating-badge badge-4">Security</div>
          <div class="floating-badge badge-5">DevOps</div>
        </div>
        <div class="hero-socials">
          <a [href]="data.personal.linkedin" target="_blank"
            rel="noopener" aria-label="LinkedIn" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852
              -3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561
              h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267
              5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064
              2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z
              M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792
              24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24
              .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a [href]="'mailto:' + data.personal.email" aria-label="Email"
            class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
        position: relative;
        min-height: 100vh;
      }

      .hero {
        min-height: 100vh;
        min-height: 100dvh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: clamp(5rem, 10vw, 7rem) clamp(1rem, 4vw, 3rem) clamp(2rem, 4vw, 3rem);
        max-width: 1300px;
        margin: 0 auto;
        gap: clamp(2rem, 4vw, 4rem);
        position: relative;
        overflow: visible;
      }

      .hero::before {
        display: none;
      }

      /* Particle canvas */
      .particle-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        pointer-events: none;
        z-index: 0;
      }

      /* Background decorations */
      .hero-bg-decoration {
        position: absolute;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
      }

      .gradient-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
      }

      .orb-1 {
        width: 500px;
        height: 500px;
        background: rgba(99, 102, 241, 0.2);
        top: -10%;
        left: -10%;
        animation: float 8s ease-in-out infinite;
      }

      .orb-2 {
        width: 350px;
        height: 350px;
        background: rgba(139, 92, 246, 0.15);
        bottom: -5%;
        right: -5%;
        animation: float 10s ease-in-out infinite reverse;
      }

      .orb-3 {
        width: 200px;
        height: 200px;
        background: rgba(59, 130, 246, 0.12);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: pulse 5s ease-in-out infinite;
      }

      .grid-pattern {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(99, 102, 241, 0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.07) 1px, transparent 1px);
        background-size: 50px 50px;
        mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
        animation: gridMove 20s linear infinite;
      }

      @keyframes gridMove {
        0% { background-position: 0 0; }
        100% { background-position: 50px 50px; }
      }

      .glow-line {
        position: absolute;
        height: 1px;
        background: linear-gradient(90deg, transparent, #6366f1, transparent);
        opacity: 0.4;
        animation: scanLine 4s ease-in-out infinite;
      }

      .glow-line-1 {
        top: 30%;
        left: 0;
        right: 0;
        animation-delay: 0s;
      }

      .glow-line-2 {
        top: 70%;
        left: 0;
        right: 0;
        animation-delay: 2s;
      }

      @keyframes scanLine {
        0%, 100% { opacity: 0; transform: translateX(-100%); }
        50% { opacity: 0.4; transform: translateX(100%); }
      }

      .hero-content {
        flex: 1;
        z-index: 1;
        animation: fadeInUp 0.8s ease-out;
      }

      .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: var(--accent-bg);
        border: 1px solid var(--accent-border);
        padding: 0.4rem 1rem;
        border-radius: 50px;
        font-size: 0.8rem;
        color: var(--accent-text);
        font-weight: 500;
        margin-bottom: 1.5rem;
        animation: fadeInUp 0.8s ease-out 0.1s both;
      }

      .badge-dot {
        width: 8px;
        height: 8px;
        background: #22c55e;
        border-radius: 50%;
        animation: pulse 2s ease-in-out infinite;
        box-shadow: 0 0 8px rgba(34, 197, 94, 0.5);
      }

      .greeting {
        color: var(--accent-light);
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0 0 0.5rem;
        letter-spacing: 1px;
        animation: fadeInUp 0.8s ease-out 0.2s both;
      }

      .name {
        font-size: clamp(2rem, 5vw, 4rem);
        font-weight: 900;
        margin: 0 0 1rem;
        line-height: 1.1;
        animation: fadeInUp 0.8s ease-out 0.3s both;
      }

      .name-line {
        display: block;
        background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899, #6366f1);
        background-size: 300% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 4s linear infinite;
      }

      .name-line.highlight {
        background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899, #6366f1);
        background-size: 300% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 4s linear infinite;
      }

      .title {
        font-size: 1.1rem;
        color: var(--text-muted);
        margin: 0 0 2rem;
        max-width: 480px;
        line-height: 1.7;
        animation: fadeInUp 0.8s ease-out 0.4s both;
      }

      .cta-buttons {
        display: flex;
        gap: 1rem;
        margin-bottom: 2.5rem;
        flex-wrap: wrap;
        animation: fadeInUp 0.8s ease-out 0.5s both;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.85rem 1.75rem;
        border-radius: 12px;
        font-weight: 600;
        font-size: 0.95rem;
        text-decoration: none;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }

      .btn::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg,
          rgba(255,255,255,0.1), transparent);
        opacity: 0;
        transition: opacity 0.3s;
      }

      .btn:hover::before {
        opacity: 1;
      }

      .btn-primary {
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);
      }

      .btn-primary:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
      }

      .btn-glass {
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        color: var(--accent-text);
        backdrop-filter: blur(10px);
      }

      .btn-glass:hover {
        background: var(--accent-bg);
        border-color: var(--accent-primary);
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
      }

      .hero-stats {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        animation: fadeInUp 0.8s ease-out 0.6s both;
      }

      .stat {
        display: flex;
        flex-direction: column;
      }

      .stat-number {
        font-size: 1.6rem;
        font-weight: 800;
        color: var(--text-heading);
        background: linear-gradient(135deg, var(--text-heading), var(--accent-light));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .stat-label {
        font-size: 0.8rem;
        color: var(--text-muted);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .stat-divider {
        width: 1px;
        height: 36px;
        background: linear-gradient(to bottom, transparent, var(--accent-primary), transparent);
      }

      /* Visual / Avatar side */
      .hero-visual {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        z-index: 1;
        animation: fadeInUp 0.8s ease-out 0.3s both;
        perspective: 800px;
      }

      .visual-container {
        position: relative;
        width: clamp(200px, 25vw, 340px);
        height: clamp(200px, 25vw, 340px);
        display: flex;
        align-items: center;
        justify-content: center;
        transform-style: preserve-3d;
        animation: float3D 6s ease-in-out infinite;
      }

      @keyframes float3D {
        0% {
          transform: rotateY(-5deg) rotateX(3deg) translateY(0px);
        }
        25% {
          transform: rotateY(5deg) rotateX(-3deg) translateY(-10px);
        }
        50% {
          transform: rotateY(3deg) rotateX(5deg) translateY(-5px);
        }
        75% {
          transform: rotateY(-3deg) rotateX(-2deg) translateY(-12px);
        }
        100% {
          transform: rotateY(-5deg) rotateX(3deg) translateY(0px);
        }
      }

      .ring {
        position: absolute;
        border-radius: 50%;
        transform-style: preserve-3d;
      }

      .ring-outer {
        width: 100%;
        height: 100%;
        border: 1px dashed rgba(99, 102, 241, 0.25);
        animation: spin 25s linear infinite;
        transform: translateZ(-20px);
      }

      .ring-inner {
        width: 78%;
        height: 78%;
        border: 1px solid rgba(139, 92, 246, 0.15);
        animation: spin 18s linear infinite reverse;
        transform: translateZ(-10px);
      }

      .ring-pulse {
        width: 110%;
        height: 110%;
        border: 1px solid rgba(99, 102, 241, 0.08);
        animation: ringPulse 3s ease-in-out infinite;
        transform: translateZ(-30px);
      }

      @keyframes ringPulse {
        0%, 100% { transform: scale(1); opacity: 0.5; }
        50% { transform: scale(1.05); opacity: 0; }
      }

      .avatar-core {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background: var(--avatar-bg);
        border: 2px solid rgba(99, 102, 241, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        box-shadow:
          0 0 60px rgba(99, 102, 241, 0.25),
          0 0 120px rgba(99, 102, 241, 0.1),
          inset 0 0 30px rgba(99, 102, 241, 0.15);
        animation: avatarGlow 3s ease-in-out infinite alternate, avatar3DDepth 6s ease-in-out infinite;
        position: relative;
        transform-style: preserve-3d;
        transform: translateZ(30px);
      }

      @keyframes avatar3DDepth {
        0%, 100% {
          box-shadow:
            5px 5px 30px rgba(0, 0, 0, 0.4),
            0 0 60px rgba(99, 102, 241, 0.25),
            inset 0 0 30px rgba(99, 102, 241, 0.15);
        }
        25% {
          box-shadow:
            -5px 8px 35px rgba(0, 0, 0, 0.5),
            0 0 70px rgba(99, 102, 241, 0.3),
            inset 0 0 35px rgba(99, 102, 241, 0.2);
        }
        50% {
          box-shadow:
            -3px -5px 25px rgba(0, 0, 0, 0.35),
            0 0 55px rgba(99, 102, 241, 0.2),
            inset 0 0 25px rgba(99, 102, 241, 0.12);
        }
        75% {
          box-shadow:
            6px -3px 30px rgba(0, 0, 0, 0.45),
            0 0 65px rgba(99, 102, 241, 0.28),
            inset 0 0 30px rgba(99, 102, 241, 0.18);
        }
      }

      .avatar-core::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1), transparent 60%);
        mix-blend-mode: color;
        pointer-events: none;
        animation: overlayShift 6s ease-in-out infinite alternate;
      }

      @keyframes overlayShift {
        0% { opacity: 0.7; transform: rotate(0deg); }
        50% { opacity: 0.4; transform: rotate(180deg); }
        100% { opacity: 0.7; transform: rotate(360deg); }
      }

      .svg-filters {
        position: absolute;
        width: 0;
        height: 0;
        overflow: hidden;
      }

      .avatar-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        border-radius: 50%;
        filter: url(#illustrated) saturate(0.85) contrast(1.1) brightness(1.05);
        transition: filter 0.5s ease, transform 0.5s ease;
      }

      .avatar-core:hover .avatar-img {
        filter: url(#illustrated) saturate(1) contrast(1.05) brightness(1.1);
        transform: scale(1.05);
      }

      @keyframes avatarGlow {
        0% { box-shadow: 0 0 60px rgba(99, 102, 241, 0.2), inset 0 0 30px rgba(99, 102, 241, 0.1); }
        100% { box-shadow: 0 0 80px rgba(99, 102, 241, 0.35), inset 0 0 40px rgba(99, 102, 241, 0.2); }
      }

      /* Avatar image responsive sizing handled via parent */

      .floating-badge {
        position: absolute;
        background: var(--badge-bg);
        backdrop-filter: blur(10px);
        border: 1px solid var(--glass-border);
        padding: 0.4rem 0.8rem;
        border-radius: 8px;
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--accent-text);
        animation: float3DBadge 4s ease-in-out infinite;
        box-shadow: var(--shadow-sm);
        transform-style: preserve-3d;
        transform: translateZ(50px);
      }

      @keyframes float3DBadge {
        0%, 100% { transform: translateZ(50px) translateY(0); }
        50% { transform: translateZ(60px) translateY(-14px); }
      }

      .badge-1 { top: 10%; left: -5%; animation-delay: 0s; }
      .badge-2 { top: 5%; right: 0%; animation-delay: 0.8s; }
      .badge-3 { bottom: 20%; left: 0%; animation-delay: 1.6s; }
      .badge-4 { bottom: 5%; right: -5%; animation-delay: 2.4s; }
      .badge-5 { top: 50%; right: -10%; animation-delay: 3.2s; }

      .hero-socials {
        display: flex;
        gap: 0.75rem;
      }

      .social-link {
        width: 42px;
        height: 42px;
        border-radius: 12px;
        background: var(--glass-bg);
        border: 1px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-secondary);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .social-link:hover {
        color: var(--accent-light);
        background: var(--accent-bg);
        border-color: var(--accent-border);
        transform: translateY(-3px);
        box-shadow: var(--shadow-accent);
      }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-14px); }
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.5; transform: scale(0.8); }
      }

      @keyframes shimmer {
        0% { background-position: 0% center; }
        100% { background-position: 300% center; }
      }

      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @media (max-width: 768px) {
        .hero {
          flex-direction: column-reverse;
          text-align: center;
          padding: 7rem 1.5rem 3rem;
          gap: 2.5rem;
          min-height: auto;
        }

        .name { font-size: 2.8rem; }

        .title {
          margin-left: auto;
          margin-right: auto;
          font-size: 1rem;
        }

        .cta-buttons { justify-content: center; }
        .hero-stats { justify-content: center; }

        .visual-container {
          width: 250px;
          height: 250px;
        }

        .avatar-core {
          width: 120px;
          height: 120px;
        }

        .floating-badge {
          font-size: 0.7rem;
          padding: 0.3rem 0.6rem;
        }

        .hero-badge {
          margin-left: auto;
          margin-right: auto;
        }

        .glow-line { display: none; }

        .orb-1 {
          width: 300px;
          height: 300px;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
        }
      }

      @media (max-width: 480px) {
        .hero {
          padding: 6rem 1rem 2rem;
          gap: 2rem;
        }

        .name { font-size: 2.2rem; }

        .greeting { font-size: 0.95rem; }

        .title { font-size: 0.9rem; }

        .hero-badge { font-size: 0.7rem; padding: 0.35rem 0.8rem; }

        .btn {
          padding: 0.75rem 1.25rem;
          font-size: 0.85rem;
        }

        .visual-container {
          width: 200px;
          height: 200px;
        }

        .avatar-core {
          width: 100px;
          height: 100px;
        }

        .hero-stats {
          gap: 1rem;
        }

        .stat-number { font-size: 1.3rem; }
        .stat-label { font-size: 0.7rem; }
        .stat-divider { height: 28px; }

        .floating-badge {
          font-size: 0.6rem;
          padding: 0.2rem 0.5rem;
        }

        .badge-5 { display: none; }
      }

      @media (max-width: 375px) {
        .hero {
          padding: 5.5rem 0.75rem 1.5rem;
          gap: 1.5rem;
        }

        .name { font-size: 1.9rem; }

        .greeting { font-size: 0.85rem; }

        .title { font-size: 0.85rem; }

        .cta-buttons {
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .btn {
          width: 100%;
          justify-content: center;
          padding: 0.8rem 1rem;
        }

        .visual-container {
          width: 180px;
          height: 180px;
        }

        .avatar-core {
          width: 90px;
          height: 90px;
        }

        .hero-stats {
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .stat-number { font-size: 1.2rem; }

        .floating-badge {
          display: none;
        }

        .social-link {
          width: 36px;
          height: 36px;
        }
      }
    `,
  ],
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  data = RESUME_DATA;
  private animationId: number | null = null;
  private particles: Array<{
    x: number; y: number;
    vx: number; vy: number;
    size: number; opacity: number;
  }> = [];

  get firstName() {
    return this.data.personal.name.split(' ')[0];
  }

  get lastName() {
    return this.data.personal.name.split(' ').slice(1).join(' ');
  }

  ngAfterViewInit() {
    this.initParticles();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private initParticles() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const count = 60;
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      this.particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      this.animationId = requestAnimationFrame(animate);
    };

    animate();
  }
}
