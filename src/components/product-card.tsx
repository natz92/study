import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice, type Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="h-full overflow-hidden transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md">
        <div className={`aspect-[4/3] ${product.color} p-4`}>
          <div className="flex h-full items-end justify-between rounded-md border border-white/50 bg-white/35 p-4">
            <span className="text-sm font-medium text-stone-700">
              {product.category}
            </span>
            {product.badge ? <Badge variant="secondary">{product.badge}</Badge> : null}
          </div>
        </div>
        <CardContent className="space-y-3 pt-5">
          <div>
            <h3 className="text-base font-semibold text-stone-950">
              {product.name}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-stone-500">
              {product.shortDescription}
            </p>
          </div>
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="font-semibold">{formatPrice(product.price)}</p>
              {product.originalPrice ? (
                <p className="text-xs text-stone-400 line-through">
                  {formatPrice(product.originalPrice)}
                </p>
              ) : null}
            </div>
            <p className="text-sm text-stone-500">
              {product.rating} · {product.reviewCount}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
