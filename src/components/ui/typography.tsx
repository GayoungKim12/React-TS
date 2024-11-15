import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { TextAlign, TextColor, TextSize, TypographyElement, Weight } from "../types/components";

const typographyVariants = cva("", {
  variants: {
    component: {
      h1: "scroll-m-20 tracking-tight",
      h2: "scroll-m-20 border-b pb-2 tracking-tight first:mt-0",
      h3: "scroll-m-20 tracking-tight",
      h4: "scroll-m-20 tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2",
      ol: "my-6 ml-6 list-decimal [&>li]:mt-2",
      a: "underline underline-offset-4",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono",
    },
    size: {
      inherit: "text-inherit",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
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
    component: "p",
    size: "md",
    weight: "normal",
    align: "left",
    color: "default",
  },
});

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  component?: TypographyElement;
  size?: TextSize;
  weight?: Weight;
  align?: TextAlign;
  color?: TextColor;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(({ className, size, weight, align, color, component, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      className={cn(
        typographyVariants({
          component,
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
