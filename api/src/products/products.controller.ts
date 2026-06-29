import { Controller, Get, NotFoundException, Param, Query } from "@nestjs/common";
import type { ProductCategory } from "./product.type";
import { ProductsService } from "./products.service";

const validCategories = new Set(["사료", "간식", "장난감", "리빙"]);

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get("categories")
  getCategories() {
    return this.productsService.getCategories();
  }

  @Get("products")
  getProducts(@Query("category") category?: string) {
    const selectedCategory =
      category && validCategories.has(category)
        ? (category as ProductCategory)
        : undefined;

    return this.productsService.getProducts(selectedCategory);
  }

  @Get("products/:slug")
  getProduct(@Param("slug") slug: string) {
    const product = this.productsService.getProduct(slug);

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return product;
  }
}
