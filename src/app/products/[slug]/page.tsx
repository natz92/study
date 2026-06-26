import { notFound } from "next/navigation";
import { StoreHeader } from "@/components/store-header";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice, getProduct, products } from "@/lib/products";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | Orange Cat Market`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <StoreHeader />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <ButtonLink href="/products" size="sm" variant="ghost">
          상품 목록으로
        </ButtonLink>

        <section className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div>
            <div className={`aspect-[4/3] rounded-lg ${product.color} p-5`}>
              <div className="flex h-full items-end rounded-md border border-white/60 bg-white/40 p-6">
                <div>
                  <Badge variant="secondary">{product.category}</Badge>
                  <h1 className="mt-4 text-4xl font-bold tracking-tight">
                    {product.name}
                  </h1>
                </div>
              </div>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>상품 설명</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="leading-7 text-stone-600">{product.description}</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {product.specs.map((spec) => (
                    <div
                      className="rounded-md border border-stone-200 bg-stone-50 p-3 text-sm"
                      key={spec}
                    >
                      {spec}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <Badge>{product.badge ?? "Orange"}</Badge>
                  <p className="text-sm text-stone-500">
                    {product.rating} · 리뷰 {product.reviewCount}
                  </p>
                </div>
                <CardTitle className="pt-4 text-2xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-bold">{formatPrice(product.price)}</p>
                  {product.originalPrice ? (
                    <p className="mt-1 text-sm text-stone-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </p>
                  ) : null}
                </div>
                <div className="grid gap-3">
                  <Button>장바구니 담기</Button>
                  <Button variant="outline">바로 구매하기</Button>
                </div>
                <p className="mt-5 text-sm leading-6 text-stone-500">
                  버튼은 UI 목업입니다. 스터디에서는 Server Action, API Route,
                  클라이언트 상태를 비교하며 로직을 연결할 수 있습니다.
                </p>
              </CardContent>
            </Card>
          </aside>
        </section>
      </main>
    </>
  );
}
