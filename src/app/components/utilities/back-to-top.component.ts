import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
<button class="back-top" [class.visible]="isVisible" (click)="scrollToTop()" aria-label="Back to top">↑</button>
  `,
  styles: []
})
export class BackToTopComponent implements OnInit {
  isVisible = false;

  ngOnInit() {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isVisible = window.scrollY > 400;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
