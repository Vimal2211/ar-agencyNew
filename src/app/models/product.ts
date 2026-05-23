export interface Product {
  id: number;
  cat: string;
  name: string;
  desc: string;
  icon: string;
  badge: string;
  image?: string;
}

export interface CategoryMeta {
  label: string;
  icon: string;
}
