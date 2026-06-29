import { connection } from "next/server";

export type Product = {
  slug: string;
  name: string;
  category: "사료" | "간식" | "장난감" | "리빙";
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

export type ProductCategory = "전체" | Product["category"];

const apiBaseUrl = process.env.API_BASE_URL ?? "http://localhost:4000";

async function apiFetch<T>(path: string): Promise<T> {
  await connection();

  const response = await fetch(`${apiBaseUrl}${path}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${path}`);
  }

  return response.json() as Promise<T>;
}

export async function getProducts() {
  return apiFetch<Product[]>("/products");
}

export async function getFeaturedProducts() {
  const products = await getProducts();

  return products.slice(0, 3);
}

export async function getCategories() {
  return apiFetch<ProductCategory[]>("/categories");
}

export async function getProduct(slug: string) {
  await connection();

  const response = await fetch(`${apiBaseUrl}/products/${slug}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return undefined;
  }

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} /products/${slug}`);
  }

  return response.json() as Promise<Product>;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(price);
}
