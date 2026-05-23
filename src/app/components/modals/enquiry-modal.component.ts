import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { NotificationService } from '../../services/notification.service';

declare global {
  interface Window {
    __EMAILJS_SERVICE_ID?: string;
    __EMAILJS_PUBLIC_KEY?: string;
    __EMAILJS_PRODUCT_TEMPLATE_ID?: string;
  }
}

@Component({
  selector: 'app-enquiry-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<div class="modal-overlay" [class.open]="isOpen" (click)="closeOnBackdrop($event)">
  <div class="modal-box">
    <button class="modal-close" (click)="close()">×</button>
    <div class="modal-title">{{ productName || 'Product Enquiry' }}</div>
    <div class="modal-subtitle">{{ productCategory || 'Quick enquiry form' }}</div>
    <div style="display:flex;flex-direction:column;gap:1rem;margin-top:1rem;">
      <div class="form-group">
        <label class="form-label">Your Name</label>
        <input class="form-input" type="text" placeholder="Full name" [(ngModel)]="enquiryForm.name" />
      </div>
      <div class="form-group">
        <label class="form-label">Phone / Email</label>
        <input class="form-input" type="text" placeholder="Contact info" [(ngModel)]="enquiryForm.contact" />
      </div>
      <div class="form-group">
        <label class="form-label">Message</label>
        <textarea class="form-textarea" placeholder="Describe your requirement…" [(ngModel)]="enquiryForm.message" style="min-height:80px;"></textarea>
      </div>
      <button
        class="btn-primary"
        (click)="submit()"
        [disabled]="sending"
        [style.width]="'100%'"
        [style.padding]="'0.9rem'"
        [style.opacity]="sending ? 0.75 : 1"
      >
        {{ sending ? 'Sending...' : 'Send Enquiry →' }}
      </button>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class EnquiryModalComponent implements OnInit {
  isOpen = false;
  productName = '';
  productCategory = '';
  enquiryForm = { name: '', contact: '', message: '' };
  sending = false;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('openEnquiry', (event: any) => {
      const product = event.detail;
      this.productName = product.name;
      this.productCategory = product.cat;
      this.open();
    });
  }

  open() {
    this.isOpen = true;
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.isOpen = false;
    document.body.style.overflow = '';
    this.enquiryForm = { name: '', contact: '', message: '' };
  }

  closeOnBackdrop(event: any) {
    if (event.target.classList.contains('modal-overlay')) {
      this.close();
    }
  }

  async submit() {
    if (!this.enquiryForm.name.trim() || !this.enquiryForm.contact.trim()) {
      this.notificationService.showToast('Please fill in your name and contact info.');
      return;
    }

    const serviceId = 'service_d5tpnff';
    const publicKey = 'Fd7L0DYMaRAjCpzrI';
    const templateId = 'template_3ri5d89';

    if (!templateId) {
      this.notificationService.showToast('Product enquiry template is not configured yet.');
      return;
    }

    this.sending = true;

    try {
      await emailjs.init({ publicKey });
      await emailjs.send(serviceId, templateId, {
        first_name: this.enquiryForm.name.trim(),
        contact_info: this.enquiryForm.contact.trim(),
        product_name: this.productName || this.productCategory || 'General Product Enquiry',
        message: this.enquiryForm.message.trim() || 'No additional message was provided.'
      });

      this.close();
      this.notificationService.showToast('✦ Enquiry sent! We will contact you within 24 hours.');
    } catch (error) {
      this.notificationService.showToast('Unable to send your enquiry right now.');
    } finally {
      this.sending = false;
    }
  }
}
