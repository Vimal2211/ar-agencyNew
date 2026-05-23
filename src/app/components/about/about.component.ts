import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
<section id="about">
  <div class="about-grid">
    <div class="about-image-wrap">
      <div class="about-img-box"></div>
      <!-- <div class="about-img-deco"></div> -->
      <div class="about-badge">
        <div class="about-badge-num">8+</div>
        <div class="about-badge-text">Years</div>
      </div>
    </div>
    <div>
      <div class="section-label">Who We Are</div>
      <h2 class="section-title">AR Agency — <em>Built on Trust</em></h2>
      <p class="section-desc">AR Agency is a professionally managed, quality-certified supply company committed to delivering the best products across diverse categories. We serve businesses and individuals with solutions that meet global quality standards.</p>
      <p class="section-desc" style="margin-top:-1.5rem;">Our portfolio is thoughtfully curated to support modern needs — combining quality, consistency, and cost efficiency in every order.</p>
      <div class="about-features">
        <div class="about-feature" *ngFor="let feature of features">
          <div class="about-feature-icon">{{ feature.icon }}</div>
          <div>
            <div class="about-feature-title">{{ feature.title }}</div>
            <div class="about-feature-text">{{ feature.text }}</div>
          </div>
        </div>
      </div>
      <a href="#contact" class="btn-primary" style="margin-top:2rem; display:inline-block;">Know More</a>
    </div>
  </div>
</section>
  `,
  styles: []
})
export class AboutComponent {
  features = [
    {
      icon: '✦',
      title: 'Quality Certified Products',
      text: 'Every product passes stringent quality checks before reaching our clients.'
    },
    {
      icon: '◎',
      title: 'Reliable Supply Chain',
      text: 'Strong distribution network ensuring consistent availability and on-time delivery.'
    },
    {
      icon: '⬡',
      title: 'Wide Product Range',
      text: 'Covering 12+ categories with hundreds of SKUs for all requirements.'
    }
  ];
}
