import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="toast" [class.show]="currentMessage">{{ currentMessage }}</div>
  `,
  styles: []
})
export class ToastComponent implements OnInit {
  currentMessage = '';

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.toast$.subscribe(message => {
      this.currentMessage = message;
    });
  }
}
