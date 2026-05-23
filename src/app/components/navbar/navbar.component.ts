import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
<nav id="navbar">
  <a href="#home" class="nav-logo">AR<span> Agency</span></a>
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#products">Products</a></li>
    <li><a href="#why-us">Why Us</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="#contact" class="btn-nav">Contact</a></li>
  </ul>
  <button class="hamburger" [class.open]="mobileMenuOpen" (click)="toggleMobileMenu()" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="mobile-menu" [class.open]="mobileMenuOpen">
  <a href="#home" (click)="closeMobileMenu()">Home</a>
  <a href="#about" (click)="closeMobileMenu()">About</a>
  <a href="#products" (click)="closeMobileMenu()">Products</a>
  <a href="#why-us" (click)="closeMobileMenu()">Why Us</a>
  <a href="#faq" (click)="closeMobileMenu()">FAQ</a>
  <a href="#contact" (click)="closeMobileMenu()">Contact</a>
</div>
  `,
  styles: []
})
export class NavbarComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    // Optional: add navbar effects on scroll
  }
}
