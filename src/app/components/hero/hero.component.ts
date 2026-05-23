import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
<section id="home">
  <div class="hero-bg"></div>
  <div class="hero-grid-lines"></div>
  <div class="hero-tag">Premium Agency Solutions</div>
  <h1 class="hero-title">
    Delivering Excellence<br>
    <em>In Every Category</em>
  </h1>
  <p class="hero-subtitle">AR Agency is your trusted partner for premium products across multiple categories — quality-driven, client-focused, and built for lasting relationships.</p>
  <div class="hero-cta">
    <a href="#products" class="btn-primary">Explore Products</a>
    <a href="#contact" class="btn-outline">Get a Quote</a>
  </div>
  <div class="hero-stats">
    <div>
      <div class="hero-stat-num">{{ stats[0].value }}</div>
      <div class="hero-stat-label">{{ stats[0].label }}</div>
    </div>
    <div>
      <div class="hero-stat-num">{{ stats[1].value }}</div>
      <div class="hero-stat-label">{{ stats[1].label }}</div>
    </div>
    <div>
      <div class="hero-stat-num">{{ stats[2].value }}</div>
      <div class="hero-stat-label">{{ stats[2].label }}</div>
    </div>
    <div>
      <div class="hero-stat-num">{{ stats[3].value }}</div>
      <div class="hero-stat-label">{{ stats[3].label }}</div>
    </div>
  </div>
  <div class="hero-scroll-hint">
    <div class="scroll-line"></div>
    Scroll to explore
  </div>
</section>

<div class="ticker-wrap">
  <div class="ticker-inner">
    <span>Premium Quality</span>
    <span>Fast Delivery</span>
    <span>Trusted by 200+ Clients</span>
    <span>ISO Certified</span>
    <span>Wide Product Range</span>
    <span>Custom Orders Welcome</span>
    <span>Ethical Practices</span>
    <span>Premium Quality</span>
    <span>Fast Delivery</span>
    <span>Trusted by 200+ Clients</span>
    <span>ISO Certified</span>
    <span>Wide Product Range</span>
    <span>Custom Orders Welcome</span>
    <span>Ethical Practices</span>
  </div>
</div>
  `,
  styles: []
})
export class HeroComponent implements OnInit {
  stats = [
    { value: 0, label: 'Products Delivered', target: 500 },
    { value: 0, label: 'Happy Clients', target: 200 },
    { value: 0, label: 'Years Experience', target: 8 },
    { value: 0, label: 'Product Categories', target: 12 }
  ];

  ngOnInit() {
    this.animateCounters();
  }

  animateCounters() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.stats.forEach(stat => {
            let current = 0;
            const increment = stat.target / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.target) {
                current = stat.target;
                clearInterval(timer);
              }
              stat.value = Math.floor(current);
            }, 20);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    const statsEl = document.querySelector('.hero-stats');
    if (statsEl) observer.observe(statsEl);
  }
}
