import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
<section id="faq">
  <div class="faq-grid">
    <div>
      <div class="section-label">Common Questions</div>
      <h2 class="section-title">Frequently <em>Asked</em></h2>
      <p class="section-desc">Find quick answers to common questions about our products, ordering process, and services.</p>
      <div class="faq-list" id="faqList">
        <div class="faq-item" [class.open]="openedIndex === i" *ngFor="let item of faqItems; let i = index">
          <button class="faq-question" (click)="toggleFaq(i)">
            {{ item.question }}
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">{{ item.answer }}</div>
        </div>
      </div>
    </div>
    <div>
      <div class="faq-contact-box">
        <div class="faq-contact-title">Still have <em>questions?</em></div>
        <p class="faq-contact-text">Can't find what you're looking for? Our team is ready to help you with any specific questions about products, pricing, or ordering.</p>
        <a href="#contact" class="btn-primary" style="display:block;text-align:center;margin-bottom:1rem;">Send Us a Message</a>
        <a href="mailto:info&#64;aragency.in" class="btn-outline" style="display:block;text-align:center;">info&#64;aragency.in</a>
        <div style="margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid rgba(201,168,76,0.15)">
          <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.8rem;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">Office Hours</div>
          <div style="font-size:0.87rem;color:var(--text)">Mon – Sat: 9:00 AM – 6:00 PM</div>
          <div style="font-size:0.83rem;color:var(--text-muted);margin-top:0.2rem">Sunday: Closed</div>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  styles: []
})
export class FaqComponent {
  openedIndex: number | null = null;

  faqItems = [
    {
      question: 'What products does AR Agency offer?',
      answer: 'AR Agency supplies a wide range of products across branding, digital marketing, print & packaging, event displays, corporate gifting, and outdoor signage — serving businesses of all sizes.'
    },
    {
      question: 'Are your products quality certified?',
      answer: 'Yes. We follow strict quality control processes for every product we supply. Our operations adhere to certified quality management standards ensuring safety and reliability.'
    },
    {
      question: 'Do you accept bulk and custom orders?',
      answer: 'Absolutely. We specialize in bulk institutional orders and custom branding requirements. Contact us with your specifications and we will provide a tailored quote.'
    },
    {
      question: 'What is your delivery timeline?',
      answer: 'Standard orders are fulfilled within 5–7 business days. Bulk and custom orders may require 10–15 days depending on volume and specifications. We always confirm timelines upfront.'
    },
    {
      question: 'How do I place an enquiry or order?',
      answer: 'You can use the Contact form on this page, send us an email, or reach out directly via WhatsApp. Our team will respond within 24 hours with full details and pricing.'
    },
    {
      question: 'Do you offer after-sales support?',
      answer: 'Yes, we provide dedicated after-sales support. If you face any issues with your order, our team will work promptly to resolve them — replacements, returns, or guidance as needed.'
    }
  ];

  toggleFaq(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}
