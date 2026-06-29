export type ProductCategory = "사료" | "간식" | "장난감" | "리빙";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  shortDescription: string;
  description: string;
  color: string;
  specs: string[];
};
