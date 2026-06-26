import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: "default" | "secondary" | "outline";
};

const variants = {
  default: "bg-stone-950 text-white",
  secondary: "bg-orange-100 text-orange-900",
  outline: "border border-stone-200 bg-white text-stone-700",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
