import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";

export function StoreHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="text-lg font-bold tracking-tight text-stone-950" href="/">
          Orange Cat Market
        </Link>
        <nav className="flex items-center gap-1">
          <ButtonLink href="/products" size="sm" variant="ghost">
            상품
          </ButtonLink>
          <ButtonLink href="/login" size="sm" variant="outline">
            로그인
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
