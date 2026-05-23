import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private toastMessage = new BehaviorSubject<string>('');
  public toast$ = this.toastMessage.asObservable();

  showToast(message: string, duration: number = 4000) {
    this.toastMessage.next(message);
    setTimeout(() => this.toastMessage.next(''), duration);
  }
}
