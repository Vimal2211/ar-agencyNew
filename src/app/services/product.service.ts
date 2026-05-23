import { Injectable } from '@angular/core';
import { Product, CategoryMeta } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly products: Product[] = [
    // BRANDING
    { id:1, cat:'branding', name:'Logo Design Package', desc:'Complete brand identity with logo, guidelines, and usage manual.', icon:'🎨', badge:'Popular' },
    { id:2, cat:'branding', name:'Brand Style Guide', desc:'Comprehensive visual standards for consistent brand representation.', icon:'📐', badge:'Essential' },
    { id:3, cat:'branding', name:'Business Card Design', desc:'Premium business card design with print-ready files.', icon:'🃏', badge:'' },
    { id:4, cat:'branding', name:'Letterhead & Stationery', desc:'Professional office stationery with branded design elements.', icon:'📄', badge:'' },
    { id:5, cat:'branding', name:'Social Media Kit', desc:'Branded templates for all major social media platforms.', icon:'📱', badge:'Trending' },

    // DIGITAL MARKETING
    { id:6, cat:'digital', name:'SEO Optimization', desc:'Full on-page and off-page SEO strategy and implementation.', icon:'🔍', badge:'Popular' },
    { id:7, cat:'digital', name:'Google Ads Campaign', desc:'Targeted pay-per-click campaign setup and management.', icon:'📊', badge:'' },
    { id:8, cat:'digital', name:'Social Media Marketing', desc:'Content strategy and paid ads across Instagram, Facebook, LinkedIn.', icon:'📣', badge:'Trending' },
    { id:9, cat:'digital', name:'Email Marketing', desc:'Automated email campaigns with analytics and A/B testing.', icon:'✉️', badge:'' },
    { id:10, cat:'digital', name:'Content Marketing', desc:'Blog posts, videos, and infographics to build brand authority.', icon:'✍️', badge:'' },

    // PRINT & PACKAGING
    { id:11, cat:'print', name:'Product Packaging Design', desc:'Eye-catching packaging design optimized for retail and e-commerce.', icon:'📦', badge:'Popular' },
    { id:12, cat:'print', name:'Brochure & Catalogue', desc:'High-quality print collateral that converts and impresses.', icon:'📋', badge:'' },
    { id:13, cat:'print', name:'Flyer Design & Print', desc:'Crisp, bold flyer designs for promotions and announcements.', icon:'📰', badge:'' },
    { id:14, cat:'print', name:'Poster & Banner Print', desc:'Large-format printing with vibrant colors and durable materials.', icon:'🖼️', badge:'' },

    // EVENTS & DISPLAYS
    { id:15, cat:'events', name:'Trade Show Booth Design', desc:'Modular exhibition booth designs that stand out on the floor.', icon:'🏛️', badge:'Popular' },
    { id:16, cat:'events', name:'Event Backdrop & Stage', desc:'Custom backdrops and stage setups for corporate events.', icon:'🎭', badge:'' },
    { id:17, cat:'events', name:'Pull-Up Banners', desc:'Portable retractable banners with premium printing.', icon:'🚀', badge:'Trending' },
    { id:18, cat:'events', name:'Event Merchandise', desc:'Branded giveaways and merchandise for events and trade shows.', icon:'🎁', badge:'' },

    // CORPORATE GIFTS
    { id:19, cat:'corporate', name:'Premium Gift Hampers', desc:'Curated corporate gift sets with luxury packaging and personalization.', icon:'🎀', badge:'Popular' },
    { id:20, cat:'corporate', name:'Branded Pen & Stationery', desc:'High-quality branded stationery sets for corporate gifting.', icon:'🖊️', badge:'' },
    { id:21, cat:'corporate', name:'Custom Desk Accessories', desc:'Personalized desk organizers, nameplates, and accessories.', icon:'🗂️', badge:'' },
    { id:22, cat:'corporate', name:'Branded Apparel', desc:'Custom T-shirts, caps, and workwear with your brand.', icon:'👕', badge:'Trending' },

    // SIGNAGE & OUTDOOR
    { id:23, cat:'signage', name:'LED Signage Boards', desc:'Energy-efficient LED signboards for storefronts and offices.', icon:'💡', badge:'Popular' },
    { id:24, cat:'signage', name:'Vehicle Branding & Wraps', desc:'Full or partial vehicle wraps for mobile brand visibility.', icon:'🚗', badge:'' },
    { id:25, cat:'signage', name:'Hoarding & Billboard', desc:'Large outdoor advertising hoardings with durable print quality.', icon:'🏙️', badge:'' },
    { id:26, cat:'signage', name:'Directional Signage', desc:'Wayfinding and directional signs for offices and facilities.', icon:'🗺️', badge:'' },
  ];

  readonly categoryMeta: { [key: string]: CategoryMeta } = {
    all: { label: 'All Products', icon: '◎' },
    branding: { label: 'Branding', icon: '🎨' },
    digital: { label: 'Digital Marketing', icon: '📊' },
    print: { label: 'Print & Packaging', icon: '📦' },
    events: { label: 'Events & Displays', icon: '🎭' },
    corporate: { label: 'Corporate Gifts', icon: '🎁' },
    signage: { label: 'Signage & Outdoor', icon: '💡' },
  };

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getCategoryMeta(cat: string): CategoryMeta {
    return this.categoryMeta[cat] || { label: cat, icon: '◎' };
  }

  filterProducts(category: string, searchQuery: string): Product[] {
    let filtered = this.products;

    if (category !== 'all') {
      filtered = filtered.filter(p => p.cat === category);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.desc.toLowerCase().includes(query)
      );
    }

    return filtered;
  }
}
