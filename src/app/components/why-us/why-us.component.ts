import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  template: `
<section id="why-us">
  <div style="text-align:center;max-width:600px;margin:0 auto;">
    <div class="section-label" style="justify-content:center">Our Strengths</div>
    <h2 class="section-title" style="max-width:100%;text-align:center">Why Choose <em>AR Agency?</em></h2>
    <p class="section-desc" style="max-width:100%;text-align:center;margin:0 auto 0">We differentiate ourselves with quality, reliability, and a genuine commitment to your success.</p>
  </div>

  <div class="why-grid">
    <div class="why-card" *ngFor="let card of whyCards" style="cursor: pointer;">
      <div class="why-card-num">{{ card.num }}</div>
      <div class="why-card-icon">
        <i [class]="card.icon"></i>
      </div>
      <div class="why-card-title">{{ card.title }}</div>
      <div class="why-card-text">{{ card.text }}</div>
    </div>
  </div>
</section>
  `,
  styles: []
})
export class WhyUsComponent {
  whyCards = [
    {
      num: '01',
      icon: "fa-solid fa-shield-halved",
      title: 'Certified Quality',
      text: 'Every product meets strict quality standards, ensuring safety, reliability, and long-term satisfaction for all our clients.'
    },
    {
      num: '02',
      icon: 'fa-solid fa-truck-fast',
      title: 'On-Time Delivery',
      text: 'Our streamlined logistics network guarantees timely fulfillment, minimizing delays and keeping your operations smooth.'
    },
    {
      num: '03',
      icon: 'fa-solid fa-tag',
      title: 'Competitive Pricing',
      text: 'We offer premium products at transparent, competitive prices — maximizing value without compromising quality.'
    },
    {
      num: '04',
      icon: 'fa-solid fa-headset',
      title: 'Dedicated Support',
      text: 'Our team is always available to assist you — from product selection to after-sales support, every step of the way.'
    },
    {
      num: '05',
      icon: 'fa-solid fa-boxes-stacked',
      title: 'Bulk & Custom Orders',
      text: 'We handle bulk institutional orders and custom requirements with ease, tailoring solutions to your specific needs.'
    },
    {
      num: '06',
      icon: 'fa-solid fa-handshake',
      title: 'Ethical Business',
      text: 'Transparency and integrity are at the core of everything we do — building trust and long-term partnerships.'
    }
  ];
}
