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
        <a href="#" class="footer-social-link" title="Instagram">In</a>
        <a href="#" class="footer-social-link" title="LinkedIn">Li</a>
        <a href="#" class="footer-social-link" title="Twitter">Tw</a>
        <a href="#" class="footer-social-link" title="Facebook">Fb</a>
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
    <div class="footer-copy">© 2025 AR Agency. All rights reserved.</div>
    <div class="footer-copy">Designed with ✦ for excellence</div>
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
