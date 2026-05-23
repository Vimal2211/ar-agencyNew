import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { NotificationService } from '../../services/notification.service';

declare global {
  interface Window {
    __EMAILJS_SERVICE_ID?: string;
    __EMAILJS_TEMPLATE_ID?: string;
    __EMAILJS_PUBLIC_KEY?: string;
  }
}

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
            <div class="contact-item-value">+91 8220617744</div>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-icon">✉️</div>
          <div>
            <div class="contact-item-label">Email</div>
            <div class="contact-item-value">sales.chennai&#64;aragency.in</div>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-icon">📍</div>
          <div>
            <div class="contact-item-label">Address</div>
            <div class="contact-item-value">AR Agency <br>No 18/46,
                                Bharathi Nagar Main Road, Pallavaram, Chennai, Tamil Nadu 600043,
                                India</div>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-icon">💬</div>
          <div>
            <div class="contact-item-label">WhatsApp</div>
            <div class="contact-item-value">+91 8220617744</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="contact-form" id="contactForm">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">First Name *</label>
            <input class="form-input" type="text" placeholder="John" [(ngModel)]="form.fname" name="fname" required />
          </div>
          <div class="form-group">
            <label class="form-label">Last Name</label>
            <input class="form-input" type="text" placeholder="Doe" [(ngModel)]="form.lname" name="lname" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Email Address *</label>
          <input class="form-input" type="email" placeholder="john@example.com" [(ngModel)]="form.email" name="email" required />
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number</label>
          <input class="form-input" type="tel" placeholder="+91 XXXXX XXXXX" [(ngModel)]="form.phone" name="phone" />
        </div>
        <div class="form-group">
          <label class="form-label">Product Category</label>
          <select class="form-select" [(ngModel)]="form.category" name="category">
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
          <textarea class="form-textarea" placeholder="Tell us about your requirements…" [(ngModel)]="form.message" name="message" required></textarea>
        </div>

        <div
          *ngIf="statusMessage"
          [style.padding]="'0.9rem 1rem'"
          [style.borderRadius]="'8px'"
          [style.fontSize]="'0.92rem'"
          [style.background]="statusType === 'error' ? 'rgba(239, 68, 68, 0.12)' : 'rgba(34, 197, 94, 0.12)'"
          [style.color]="statusType === 'error' ? '#fecaca' : '#dcfce7'"
          [style.border]="statusType === 'error' ? '1px solid rgba(239, 68, 68, 0.25)' : '1px solid rgba(34, 197, 94, 0.25)'"
        >
          {{ statusMessage }}
        </div>

        <button
          class="btn-primary"
          (click)="submitForm()"
          [disabled]="sending"
          [style.width]="'100%'"
          [style.padding]="'1rem'"
          [style.opacity]="sending ? 0.75 : 1"
        >
          {{ sending ? 'Sending...' : 'Send Message →' }}
        </button>
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

  sending = false;
  statusMessage = '';
  statusType: 'success' | 'error' = 'success';

  constructor(private notificationService: NotificationService) {}

  async submitForm(): Promise<void> {
    const fullName = this.form.fname.trim() + (this.form.lname.trim() ? ' ' + this.form.lname.trim() : '');
    console.log('fullName: ', fullName);
    const email = this.form.email.trim();
    const message = this.form.message.trim();

    if (!fullName || !email || !message) {
      this.statusType = 'error';
      this.statusMessage = 'Please fill in your first name, email address, and message.';
      this.notificationService.showToast('Please fill all required fields.');
      return;
    }

    const serviceId = 'service_s2qc95s';
    const templateId =  'template_5pj9trt';
    const publicKey = 'Uw-bBU_SizAeWY1JZ';

    if (!serviceId || !templateId || !publicKey) {
      this.statusType = 'error';
      this.statusMessage = 'EmailJS is not configured yet. Add your Service ID, Template ID, and Public Key before sending.';
      this.notificationService.showToast('EmailJS is not configured yet.');
      return;
    }

    this.sending = true;
    this.statusType = 'success';
    this.statusMessage = 'Sending your message...';

    try {
      await emailjs.init({ publicKey });
      await emailjs.send(serviceId, templateId, {
        from_name: fullName,
        from_email: email,
        service: this.form.category.trim() || 'General Enquiry',
        message,
        time: new Date().toLocaleString()
      });

      this.notificationService.showToast('✦ Message sent! Our team will be in touch shortly.');
      this.statusType = 'success';
      this.statusMessage = 'Your message has been sent successfully.';
      this.form = { fname: '', lname: '', email: '', phone: '', category: '', message: '' };
    } catch (error) {
      this.statusType = 'error';
      this.statusMessage = 'Something went wrong while sending your message. Please try again.';
      this.notificationService.showToast('Unable to send your message right now.');
    } finally {
      this.sending = false;
    }
  }
}
