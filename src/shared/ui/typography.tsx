import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2",
      ol: "my-6 ml-6 list-decimal [&>li]:mt-2",
      a: "font-medium underline underline-offset-4",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      destructive: "text-destructive",
    },
  },
  defaultVariants: {
    variant: "p",
    size: "base",
    weight: "normal",
    align: "left",
    color: "default",
  },
});

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "p" | "ul" | "ol" | "a" | "blockquote" | "code" | "table" | "tr" | "th" | "td";
type Size = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
type Weight = "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
type TextAlign = "left" | "center" | "right";
type Color = "default" | "muted" | "primary" | "secondary" | "destructive";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: TypographyElement;
  size?: Size;
  weight?: Weight;
  align?: TextAlign;
  color?: Color;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(({ className, variant, size, weight, align, color, as, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      className={cn(
        typographyVariants({
          variant,
          size,
          weight,
          align,
          color,
          className,
        })
      )}
      ref={ref}
      {...props}
    />
  );
});

Typography.displayName = "Typography";

export { Typography, typographyVariants };
