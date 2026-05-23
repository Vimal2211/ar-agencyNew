import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-brand-name">AR<span> Agency</span></div>
      <p class="footer-brand-desc">Premium agency delivering quality products across multiple categories. Trusted by 200+ clients nationwide.</p>
      <div class="footer-social">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Instagram">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-2.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M6.94 8.5H3.6V20h3.34V8.5ZM5.27 7.1A1.93 1.93 0 1 0 5.28 3.2a1.93 1.93 0 0 0-.01 3.9ZM20.4 13.1c0-3.14-1.68-4.6-3.92-4.6-1.8 0-2.6 1-3.04 1.7V8.5H9.1V20h3.34v-6.2c0-1.58.3-3.1 2.25-3.1 1.92 0 1.95 1.8 1.95 3.2V20h3.36v-6.9Z"/>
          </svg>
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Twitter">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M18.9 3H21l-6.2 7.1L22 21h-5.7l-4.5-5.9L6.5 21H4.4l6.7-7.6L2 3h5.8l4.1 5.4L18.9 3Zm-2 16h1.6L7.1 4.9H5.3l11.6 14.1Z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Facebook">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5H16V5.1c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.7v2.1H8v3h2.4v7h3.1Z"/>
          </svg>
        </a>
      </div>
    </div>
    <div>
      <div class="footer-col-title">Quick Links</div>
      <ul class="footer-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#why-us">Why Choose Us</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Categories</div>
      <ul class="footer-links">
        <li><a href="#products">Branding</a></li>
        <li><a href="#products">Digital Marketing</a></li>
        <li><a href="#products">Print & Packaging</a></li>
        <li><a href="#products">Events & Displays</a></li>
        <li><a href="#products">Corporate Gifts</a></li>
        <li><a href="#products">Signage & Outdoor</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Legal</div>
      <ul class="footer-links">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Disclaimer</a></li>
        <li><a href="#">Return Policy</a></li>
      </ul>
      <div style="margin-top:1.5rem;">
        <div class="footer-col-title">Subscribe</div>
        <div style="display:flex;gap:0.5rem;margin-top:0.5rem;">
          <input type="email" placeholder="Your email" [(ngModel)]="newsletterEmail" 
                 style="background:var(--dark3);border:1px solid rgba(201,168,76,0.2);border-radius:2px;padding:0.55rem 0.9rem;font-family:var(--font-body);font-size:0.82rem;color:var(--text);outline:none;flex:1;min-width:0;" />
          <button (click)="subscribeNewsletter()" style="background:var(--gold);border:none;border-radius:2px;color:var(--dark);font-family:var(--font-body);font-size:0.8rem;font-weight:700;padding:0 0.9rem;cursor:pointer;white-space:nowrap;">→</button>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">© 2026 AR Agency. All rights reserved.</div>
    <div class="footer-copy">
      Designed with ✦ by
      <a href="https://www.menbotechnologies.in" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; font-weight: 700;">
        Menbo Technologies
      </a>
    </div>
  </div>
</footer>
  `,
  styles: []
})
export class FooterComponent {
  newsletterEmail = '';

  constructor(private notificationService: NotificationService) {}

  subscribeNewsletter() {
    if (!this.newsletterEmail.trim() || !this.newsletterEmail.includes('@')) {
      this.notificationService.showToast('Please enter a valid email.');
      return;
    }
    this.newsletterEmail = '';
    this.notificationService.showToast('✦ You are now subscribed to our newsletter!');
  }
}
