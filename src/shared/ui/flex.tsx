import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const flexVariants = cva("items-center justify-center", {
  variants: {
    display: {
      default: "flex",
      inline: "inline-flex",
    },
    direction: {
      col: "flex-col",
      default: "flex-row",
    },
    gap: {
      default: "gap-4",
      sm: "gap-2",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-12",
      "3xl": "gap-16",
    },
    items: {
      center: "items-center",
      end: "items-end",
      start: "items-start",
      stretch: "items-stretch",
    },
    justify: {
      center: "justify-center",
      end: "justify-end",
      start: "justify-start",
      between: "justify-beween",
      evenly: "justify-evenly",
    },
  },
  defaultVariants: {
    display: "default",
    direction: "default",
    gap: "default",
    items: "center",
    justify: "center",
  },
});

interface FlexProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof flexVariants> {
  asChild?: boolean;
  display?: "default" | "inline";
  direction?: "default" | "col";
  gap?: "default" | "sm" | "lg" | "xl" | "2xl" | "3xl";
  items?: "center" | "start" | "end" | "stretch";
  justify?: "center" | "start" | "between" | "end" | "evenly";
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(({ className, display, direction, gap, items, justify, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return <Comp className={cn(flexVariants({ className, display, direction, gap, items, justify }))} ref={ref} {...props} />;
});

export { Flex, flexVariants };
