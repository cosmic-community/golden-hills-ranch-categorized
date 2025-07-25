// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Product interface
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    name: string;
    description: string;
    price: number;
    weight?: string;
    images: Array<{
      url: string;
      imgix_url: string;
    }>;
    category?: Category;
    in_stock: boolean;
    featured: boolean;
  };
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name: string;
    description?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Page interface
export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    title: string;
    content: string;
    meta_description?: string;
  };
}

// Homepage Content interface
export interface HomepageContent extends CosmicObject {
  type: 'homepage-content';
  metadata: {
    hero_title: string;
    hero_subtitle: string;
    hero_background_image: {
      url: string;
      imgix_url: string;
    };
    featured_products_title: string;
    featured_products_description: string;
    categories_title: string;
    categories_description: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}

export function isPage(obj: CosmicObject): obj is Page {
  return obj.type === 'pages';
}

export function isHomepageContent(obj: CosmicObject): obj is HomepageContent {
  return obj.type === 'homepage-content';
}