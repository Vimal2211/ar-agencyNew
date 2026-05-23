import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<section id="contact">
  <div class="contact-grid">
    <div>
      <div class="section-label">Get In Touch</div>
      <h2 class="section-title">Let's Start <em>Working Together</em></h2>
      <p class="section-desc">Reach out for product enquiries, bulk orders, custom requirements, or general information.</p>
      <div class="contact-info">
        <div class="contact-item">
          <div class="contact-item-icon">📞</div>
          <div>
            <div class="contact-item-label">Phone</div>
            <div class="contact-item-value">+91 98765 43210</div>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-icon">✉️</div>
          <div>
            <div class="contact-item-label">Email</div>
            <div class="contact-item-value">info&#64;aragency.in</div>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-icon">📍</div>
          <div>
            <div class="contact-item-label">Address</div>
            <div class="contact-item-value">AR Agency HQ<br>Your City, State – 000000</div>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-icon">💬</div>
          <div>
            <div class="contact-item-label">WhatsApp</div>
            <div class="contact-item-value">+91 98765 43210</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="contact-form" id="contactForm">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">First Name *</label>
            <input class="form-input" type="text" placeholder="John" [(ngModel)]="form.fname" />
          </div>
          <div class="form-group">
            <label class="form-label">Last Name</label>
            <input class="form-input" type="text" placeholder="Doe" [(ngModel)]="form.lname" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Email Address *</label>
          <input class="form-input" type="email" placeholder="john@example.com" [(ngModel)]="form.email" />
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number</label>
          <input class="form-input" type="tel" placeholder="+91 XXXXX XXXXX" [(ngModel)]="form.phone" />
        </div>
        <div class="form-group">
          <label class="form-label">Product Category</label>
          <select class="form-select" [(ngModel)]="form.category">
            <option value="">Select a category…</option>
            <option>Branding</option>
            <option>Digital Marketing</option>
            <option>Print & Packaging</option>
            <option>Events & Displays</option>
            <option>Corporate Gifts</option>
            <option>Signage & Outdoor</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Your Message *</label>
          <textarea class="form-textarea" placeholder="Tell us about your requirements…" [(ngModel)]="form.message"></textarea>
        </div>
        <button class="btn-primary" (click)="submitForm()" style="width:100%;padding:1rem;">Send Message →</button>
      </div>
    </div>
  </div>
</section>
  `,
  styles: []
})
export class ContactComponent {
  form = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  };

  constructor(private notificationService: NotificationService) {}

  submitForm() {
    if (!this.form.fname.trim() || !this.form.email.trim() || !this.form.message.trim()) {
      this.notificationService.showToast('Please fill all required fields.');
      return;
    }
    this.notificationService.showToast('✦ Message sent! Our team will be in touch shortly.');
    this.form = { fname: '', lname: '', email: '', phone: '', category: '', message: '' };
  }
}
