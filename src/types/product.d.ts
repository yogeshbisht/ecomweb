export type Review = {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  categoryId: string;
  images: string[];
  sizes?: string[];
  colors?: string[];
  price: number;
  discountPercentage?: number;
  stock?: number;
  brand?: string;
  tags?: string[];
  isNew?: boolean;
  isTrending?: boolean;
  rating?: number;
  reviews?: Review[];
  createdAt: Date;
};
