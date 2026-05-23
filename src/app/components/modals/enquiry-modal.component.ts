import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

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
      <button class="btn-primary" (click)="submit()" style="width:100%;padding:0.9rem;">Send Enquiry →</button>
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

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
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

  submit() {
    if (!this.enquiryForm.name.trim() || !this.enquiryForm.contact.trim()) {
      this.notificationService.showToast('Please fill in your name and contact info.');
      return;
    }
    this.close();
    this.notificationService.showToast('✦ Enquiry sent! We will contact you within 24 hours.');
  }
}
