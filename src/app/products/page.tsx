import { ProductCard } from "@/components/product-card";
import { StoreHeader } from "@/components/store-header";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { getCategories, getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <>
      <StoreHeader />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge variant="outline">상품 목록</Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              고양이 용품 전체 상품
            </h1>
            <p className="mt-3 max-w-2xl text-stone-600">
              사료, 간식, 장난감, 리빙 카테고리를 목업 데이터로 렌더링하는
              목록 페이지입니다.
            </p>
          </div>
          <ButtonLink href="/login" variant="outline">
            로그인 후 구매하기
          </ButtonLink>
        </div>

        <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "전체" ? "default" : "outline"}
              className="shrink-0"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
