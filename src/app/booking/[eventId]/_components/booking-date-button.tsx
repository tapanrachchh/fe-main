import { format } from "date-fns";
import { forwardRef } from "react";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface BookingDateButtonProps {
  date: Date;
  isActive?: boolean;
}

export const BookingDateButton = forwardRef<
  HTMLButtonElement,
  ButtonProps & BookingDateButtonProps
>(({ date, isActive, ...rest }, ref) => {
  return (
    <Button
      ref={ref}
      variant="outline"
      className={cn(
        "box-border flex !h-[75px] !w-[70px] flex-col items-center justify-center rounded-lg border border-secondary bg-background p-3 dark:border-primary",
        isActive && "border-primary bg-primary hover:bg-primary"
      )}
      {...rest}
    >
      <p
        className={cn(
          "truncate text-center text-xs text-primary dark:text-white",
          isActive && "!text-secondary"
        )}
      >
        {format(date, "EEEE")}
      </p>
      <p
        className={cn(
          "text-2xl font-bold text-primary dark:text-white",
          isActive && "!text-secondary"
        )}
      >
        {format(date, "dd")}
      </p>
    </Button>
  );
});

BookingDateButton.displayName = "DateButton";
