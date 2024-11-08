import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { AlignItems, FlexDirection, FlexDisplay, FlexGap, JustifyContens } from "../types/components/flex.types";

const flexVariants = cva("items-center justify-center", {
  variants: {
    display: {
      default: "flex",
      inline: "inline-flex",
    },
    direction: {
      col: "flex-col",
      row: "flex-row",
    },
    gap: {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-10",
      "3xl": "gap-12",
      "4xl": "gap-14",
      "5xl": "gap-16",
      "6xl": "gap-18",
      "7xl": "gap-20",
      "8xl": "gap-24",
      "9xl": "gap-28",
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
    direction: "row",
    gap: "md",
    items: "center",
    justify: "center",
  },
});

interface FlexProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof flexVariants> {
  asChild?: boolean;
  display?: FlexDisplay;
  direction?: FlexDirection;
  gap?: FlexGap;
  items?: AlignItems;
  justify?: JustifyContens;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(({ className, display, direction, gap, items, justify, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return <Comp className={cn(flexVariants({ className, display, direction, gap, items, justify }))} ref={ref} {...props} />;
});

Flex.displayName = "Flex";

export { Flex, flexVariants };
