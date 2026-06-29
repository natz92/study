import { Injectable } from "@nestjs/common";
import { categories, products } from "./products.data";
import type { ProductCategory } from "./product.type";

@Injectable()
export class ProductsService {
  getCategories() {
    return ["전체", ...categories];
  }

  getProducts(category?: ProductCategory) {
    if (!category) {
      return products;
    }

    return products.filter((product) => product.category === category);
  }

  getProduct(slug: string) {
    return products.find((product) => product.slug === slug);
  }
}
