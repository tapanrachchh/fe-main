import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "bg-white dark:border-primary dark:text-primary dark:bg-primary-foreground border border-black text-sm text-black",
  {
    variants: {
      size: {
        default: "text-xs px-[0.9em] py-[0.4em] rounded-xl",
        lg: "text-base sm:text-base px-[0.9em] py-[0.4em] rounded-xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  className?: string;
}

export default function Badge({ children, size, className }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ size }), className)}>{children}</span>
  );
}
