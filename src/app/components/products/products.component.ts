import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<section id="products">
  <div class="products-header">
    <div>
      <div class="section-label">Our Portfolio</div>
      <h2 class="section-title" style="margin-bottom:0">Explore <em>Our Products</em></h2>
    </div>
    <div style="display:flex;align-items:center;gap:1rem;">
      <input #searchInput type="text" placeholder="Search products…" 
             (input)="onSearch()"
             style="background:var(--dark3);border:1px solid rgba(201,168,76,0.2);border-radius:2px;padding:0.6rem 1rem;font-family:var(--font-body);font-size:0.85rem;color:var(--text);outline:none;width:220px;" />
    </div>
  </div>

  <div class="cat-filter" id="catFilter">
    <button class="cat-btn" [ngClass]="{'active': activeCategory === cat}" 
            *ngFor="let cat of categories"
            (click)="filterByCategory(cat)">{{ getCategoryLabel(cat) }}</button>
  </div>

  <div id="productsContainer">
    <ng-container *ngIf="filteredProducts.length > 0; else noResults">
      <ng-container *ngFor="let section of groupedProducts | keyvalue">
        <div class="cat-section-title">
          <span>{{ getCategoryMeta(section.key).icon }}</span>
          <em>{{ getCategoryMeta(section.key).label }}</em>
        </div>
        <div class="product-grid">
          <div class="product-card" *ngFor="let product of section.value">
            <div class="product-card-img">
              <div class="product-card-icon">{{ product.icon }}</div>
              <div class="product-card-overlay">
                <button class="product-card-overlay-btn" (click)="openEnquiry(product)">Enquire Now</button>
              </div>
            </div>
            <div class="product-card-body">
              <div class="product-cat-tag">{{ getCategoryMeta(product.cat).label }}</div>
              <div class="product-name">{{ product.name }}</div>
              <div class="product-desc">{{ product.desc }}</div>
              <div class="product-card-footer">
                <button class="product-enquire-btn" (click)="openEnquiry(product)">Get Quote</button>
                <span class="product-badge" *ngIf="product.badge">★ {{ product.badge }}</span>
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </ng-container>

    <ng-template #noResults>
      <div style="text-align:center;padding:4rem 0;color:var(--text-muted);">
        <div style="font-size:3rem;margin-bottom:1rem;opacity:0.3">◎</div>
        <div style="font-size:1rem;font-weight:500;">No products found</div>
        <div style="font-size:0.85rem;margin-top:0.5rem;">Try a different search or category</div>
      </div>
    </ng-template>
  </div>
</section>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  products: Product[] = [];
  filteredProducts: Product[] = [];
  groupedProducts: { [key: string]: Product[] } = {};
  activeCategory = 'all';
  searchQuery = '';
  categories = ['all', 'branding', 'digital', 'print', 'events', 'corporate', 'signage'];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filterProducts();
  }

  filterByCategory(category: string) {
    this.activeCategory = category;
    this.filterProducts();
  }

  onSearch() {
    this.searchQuery = this.searchInput.nativeElement.value.toLowerCase().trim();
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.productService.filterProducts(this.activeCategory, this.searchQuery);
    this.groupProducts();
  }

  groupProducts() {
    this.groupedProducts = {};
    if (this.activeCategory === 'all') {
      this.filteredProducts.forEach(product => {
        if (!this.groupedProducts[product.cat]) {
          this.groupedProducts[product.cat] = [];
        }
        this.groupedProducts[product.cat].push(product);
      });
    }
  }

  getCategoryLabel(cat: string): string {
    return this.productService.getCategoryMeta(cat).label;
  }

  getCategoryMeta(cat: string) {
    return this.productService.getCategoryMeta(cat);
  }

  openEnquiry(product: Product) {
    const event = new CustomEvent('openEnquiry', { detail: product });
    window.dispatchEvent(event);
  }
}
