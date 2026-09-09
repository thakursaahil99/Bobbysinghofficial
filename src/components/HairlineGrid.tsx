import { createElement } from "react";
import { cn } from "@/lib/cn";

/**
 * Hairline grid that never shows empty filler cells.
 * Each child draws its own right/bottom border; the wrapper draws top/left.
 */
export function HairlineGrid({
  children,
  className,
  cols = "md:grid-cols-2 lg:grid-cols-3",
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  cols?: string;
  as?: React.ElementType;
}) {
  return createElement(
    as,
    {
      className: cn(
        "grid border-t border-l border-line [&>*]:border-r [&>*]:border-b [&>*]:border-line",
        cols,
        className,
      ),
    },
    children,
  );
}
