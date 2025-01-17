import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface SuccessModalProps {
  open: boolean;
  onOpenChange: (value: boolean) => void;
}

export function SuccessModal({ open, onOpenChange }: SuccessModalProps) {
  const router = useRouter();

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        if (!val) router.replace("/request-movie");
        onOpenChange(val);
      }}
    >
      <DialogContent
        aria-describedby="movie-dialog"
        className="w-[95%] max-w-lg rounded-xl sm:!rounded-3xl sm:px-12 sm:py-12"
      >
        <DialogHeader className="items-center justify-center">
          <Player
            src="/assets/lottie/success.json"
            loop={false}
            autoplay
            keepLastFrame
            className="size-40"
          />

          <DialogTitle className="!text-lg !text-text">
            Your request has been proceed
          </DialogTitle>
          <DialogDescription className="text-center !text-sm !text-text-sub">
            Thanks for showing interest. We’ll soon going to be make this
            happen. Stay connected with us and subscribe to our newsletter to
            get latest updates.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mx-auto mt-8">
          <DialogClose asChild>
            <Button className="px-8 sm:min-w-[245px]">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
