import { Injectable } from '@angular/core';
import { Product, CategoryMeta } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly products: Product[] = [
    // BRANDING
    { id:1, cat:'branding', name:'Logo Design Package', desc:'Complete brand identity with logo, guidelines, and usage manual.', icon:'🎨', badge:'Popular', image:'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80' },
    { id:2, cat:'branding', name:'Brand Style Guide', desc:'Comprehensive visual standards for consistent brand representation.', icon:'📐', badge:'Essential', image:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80' },
    { id:3, cat:'branding', name:'Business Card Design', desc:'Premium business card design with print-ready files.', icon:'🃏', badge:'', image:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80' },
    { id:4, cat:'branding', name:'Letterhead & Stationery', desc:'Professional office stationery with branded design elements.', icon:'📄', badge:'', image:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80' },
    { id:5, cat:'branding', name:'Social Media Kit', desc:'Branded templates for all major social media platforms.', icon:'📱', badge:'Trending', image:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80' },

    // DIGITAL MARKETING
    { id:6, cat:'digital', name:'SEO Optimization', desc:'Full on-page and off-page SEO strategy and implementation.', icon:'🔍', badge:'Popular', image:'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80' },
    { id:7, cat:'digital', name:'Google Ads Campaign', desc:'Targeted pay-per-click campaign setup and management.', icon:'📊', badge:'', image:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80' },
    { id:8, cat:'digital', name:'Social Media Marketing', desc:'Content strategy and paid ads across Instagram, Facebook, LinkedIn.', icon:'📣', badge:'Trending', image:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80' },
    { id:9, cat:'digital', name:'Email Marketing', desc:'Automated email campaigns with analytics and A/B testing.', icon:'✉️', badge:'', image:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80' },
    { id:10, cat:'digital', name:'Content Marketing', desc:'Blog posts, videos, and infographics to build brand authority.', icon:'✍️', badge:'', image:'https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=900&q=80' },

    // PRINT & PACKAGING
    { id:11, cat:'print', name:'Product Packaging Design', desc:'Eye-catching packaging design optimized for retail and e-commerce.', icon:'📦', badge:'Popular', image:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80' },
    { id:12, cat:'print', name:'Brochure & Catalogue', desc:'High-quality print collateral that converts and impresses.', icon:'📋', badge:'', image:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80' },
    { id:13, cat:'print', name:'Flyer Design & Print', desc:'Crisp, bold flyer designs for promotions and announcements.', icon:'📰', badge:'', image:'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80' },
    { id:14, cat:'print', name:'Poster & Banner Print', desc:'Large-format printing with vibrant colors and durable materials.', icon:'🖼️', badge:'', image:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80' },

    // EVENTS & DISPLAYS
    { id:15, cat:'events', name:'Trade Show Booth Design', desc:'Modular exhibition booth designs that stand out on the floor.', icon:'🏛️', badge:'Popular', image:'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80' },
    { id:16, cat:'events', name:'Event Backdrop & Stage', desc:'Custom backdrops and stage setups for corporate events.', icon:'🎭', badge:'', image:'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=80' },
    { id:17, cat:'events', name:'Pull-Up Banners', desc:'Portable retractable banners with premium printing.', icon:'🚀', badge:'Trending', image:'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80' },
    { id:18, cat:'events', name:'Event Merchandise', desc:'Branded giveaways and merchandise for events and trade shows.', icon:'🎁', badge:'', image:'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80' },

    // CORPORATE GIFTS
    { id:19, cat:'corporate', name:'Premium Gift Hampers', desc:'Curated corporate gift sets with luxury packaging and personalization.', icon:'🎀', badge:'Popular', image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80' },
    { id:20, cat:'corporate', name:'Branded Pen & Stationery', desc:'High-quality branded stationery sets for corporate gifting.', icon:'🖊️', badge:'', image:'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80' },
    { id:21, cat:'corporate', name:'Custom Desk Accessories', desc:'Personalized desk organizers, nameplates, and accessories.', icon:'🗂️', badge:'', image:'https://images.unsplash.com/photo-1507924538820-ede94a04019d?auto=format&fit=crop&w=900&q=80' },
    { id:22, cat:'corporate', name:'Branded Apparel', desc:'Custom T-shirts, caps, and workwear with your brand.', icon:'👕', badge:'Trending', image:'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=900&q=80' },

    // SIGNAGE & OUTDOOR
    { id:23, cat:'signage', name:'LED Signage Boards', desc:'Energy-efficient LED signboards for storefronts and offices.', icon:'💡', badge:'Popular', image:'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80' },
    { id:24, cat:'signage', name:'Vehicle Branding & Wraps', desc:'Full or partial vehicle wraps for mobile brand visibility.', icon:'🚗', badge:'', image:'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=900&q=80' },
    { id:25, cat:'signage', name:'Hoarding & Billboard', desc:'Large outdoor advertising hoardings with durable print quality.', icon:'🏙️', badge:'', image:'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=900&q=80' },
    { id:26, cat:'signage', name:'Directional Signage', desc:'Wayfinding and directional signs for offices and facilities.', icon:'🗺️', badge:'', image:'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80' },
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

  readonly categoryImageKeywords: Record<string, string> = {
    branding: 'branding',
    digital: 'digital marketing',
    print: 'packaging design',
    events: 'event decor',
    corporate: 'corporate gifts',
    signage: 'signage'
  };

  readonly categoryImageUrls: Record<string, string> = {
    branding: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
    digital: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    print: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    events: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    corporate: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    signage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80'
  };

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getProductImage(product: Product): string {
    if (product.image) {
      return product.image;
    }

    return this.categoryImageUrls[product.cat] || this.categoryImageUrls['branding'];
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
