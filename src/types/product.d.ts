export type Review = {
  id: string;
  rating: number;
  comment: string;
  createdAt: Date;
};

type Stock = {
  size: string;
  quantity: number;
};

type ProductType = "apparel" | "accessory" | "shoes" | "watch";

export type Product = {
  id: string;
  name: string;
  type: ProductType;
  slug: string;
  excerpt?: string;
  description: string;
  categoryId: string;
  images: string[];
  price: number;
  discountPercentage?: number;
  stock: Stock[];
  brand?: string;
  tags?: string[];
  isNew?: boolean;
  isTrending?: boolean;
  rating?: number;
  reviews?: Review[];
  createdAt: Date;
};
