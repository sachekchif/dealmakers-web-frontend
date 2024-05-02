export interface Property {
  id: number;
  slug: string;
  name: string;
  location: string;
  price: string;
  type: string;
  size: string;
  amenities: string[][];
  description: string;
  main_image_url: string;
  featured_images_url: string[];
  features: string[][];
  is_active: boolean;
}

