import { createElement } from "react";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  as = "div",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>) {
  return createElement(
    as,
    {
      ...rest,
      className: cn("mx-auto w-full max-w-[1400px] px-gutter", className),
    },
    children,
  );
}
