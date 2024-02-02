export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Sizes[];
  slug: string;
  tags: string[];
  title: string;
  //type: Types;
  gender: Category
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  size: Sizes;
  image: string;
}

export type Category = 'men'|'women'|'kid'|'unisex';
export type Sizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type Types = 'shirts'|'pants'|'hoodies'|'hats';
