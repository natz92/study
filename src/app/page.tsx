import { ProductCard } from "@/components/product-card";
import { StoreHeader } from "@/components/store-header";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredProducts, formatPrice, products } from "@/lib/products";

export default function Home() {
  const heroProduct = products[0];

  return (
    <>
      <StoreHeader />
      <main>
        <section className="border-b border-stone-200 bg-stone-50">
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_28rem] lg:px-8">
            <div>
              <Badge variant="secondary">스터디 샘플 프로젝트</Badge>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-stone-950 sm:text-6xl">
                App Router로 만드는 고양이 쇼핑몰
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
                사료, 간식, 장난감, 리빙 상품 목업 데이터로 메인, 상품 목록,
                상품 상세, 로그인 화면을 탐색하는 최소 샘플입니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/products" size="lg">
                  상품 둘러보기
                </ButtonLink>
                <ButtonLink href="/login" size="lg" variant="outline">
                  로그인 화면
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-lg border border-stone-200 bg-white p-4 shadow-sm">
              <div className={`aspect-square rounded-md ${heroProduct.color} p-5`}>
                <div className="flex h-full flex-col justify-between rounded-md border border-white/60 bg-white/40 p-5">
                  <Badge>{heroProduct.badge}</Badge>
                  <div>
                    <p className="text-sm font-medium text-stone-600">
                      오늘의 추천
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-stone-950">
                      {heroProduct.name}
                    </h2>
                    <p className="mt-2 text-stone-600">
                      {heroProduct.shortDescription}
                    </p>
                    <p className="mt-5 text-xl font-bold">
                      {formatPrice(heroProduct.price)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-orange-700">Featured</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight">
                고양이를 위한 대표 상품
              </h2>
            </div>
            <ButtonLink href="/products" variant="ghost">
              전체 보기
            </ButtonLink>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
