"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Player } from "@lottiefiles/react-lottie-player";
import { Bell } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { makeMovieRequest } from "@/actions/movie-requests";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { LOCAL_STORAGE_NOTIFY_ME_LIST } from "@/config/constants";
import { usePreferences } from "@/provider/preferences-provider";
import { getShowDetails } from "@/services/shows";
import { Show } from "@/types/show.type";

const schema = z.object({
  email: z
    .string()
    .min(3, { message: "Please provide email address" })
    .email({ message: "Please provide email address" }),
});

type FormSchema = z.infer<typeof schema>;

export function NotifyOrBookingButton() {
  const { slug } = useParams();
  const { preferences, setPreferences } = usePreferences();

  const [show, setShow] = useState<Show | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] =
    useState<boolean>(false);
  const [isAlreadyNotified, setIsAlreadyNotified] = useState<boolean>(false);

  const { control, setValue, setError, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    getShowDetails(slug as string).then((res) => setShow(res));

    const notifyMeList: string[] = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_NOTIFY_ME_LIST) ?? "[]"
    );
    const found = notifyMeList.includes(slug as string);

    if (found) {
      setIsAlreadyNotified(true);
    }
  }, [slug]);

  useEffect(() => {
    if (preferences.email) {
      setValue("email", preferences.email);
    }
  }, [preferences.email, setValue]);

  const onSubmit = async (data: FormSchema) => {
    if (preferences.city === null)
      return setError("email", { message: "Please select city" });

    setIsSubmitting(true);

    const { error } = await makeMovieRequest({
      city_id: Number(preferences.city.id),
      email: data.email,
      movie_id: Number(show?.movie_id),
    });

    setIsSubmitting(false);
    if (error) return setError("email", error);

    setPreferences({ ...preferences, email: data.email });

    const notifyMeList = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_NOTIFY_ME_LIST) ?? "[]"
    );
    localStorage.setItem(
      LOCAL_STORAGE_NOTIFY_ME_LIST,
      JSON.stringify([...notifyMeList, slug])
    );

    setIsAlreadyNotified(true);
    setIsSuccessDialogOpen(true);
    setIsDialogOpen(false);
  };

  return (
    <div className="sticky bottom-0 border-b border-t bg-background p-4 sm:hidden">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button disabled={isAlreadyNotified} className="w-full">
            {isAlreadyNotified ? (
              <span className="flex items-center gap-2">
                <Bell size={24} fill="#262626" /> Will Notify You Soon
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Bell size={24} /> Notify Me
              </span>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[95%] rounded-2xl sm:max-w-[600px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader className="mb-4">
              <DialogTitle className="text-left">Notify Me</DialogTitle>
              <DialogDescription className="text-left">
                Enter your email to get notified on show updates
              </DialogDescription>
            </DialogHeader>

            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    type="email"
                    placeholder="Your email"
                    {...field}
                    autoFocus={false}
                  />
                  {error && <p className="text-red-500">{error.message}</p>}
                </>
              )}
            />

            <DialogFooter className="mt-5">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting...." : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
        <DialogContent className="w-[90%] rounded-xl sm:max-w-[425px]">
          <DialogHeader className="flex flex-col items-center space-y-0 text-center">
            <Player
              src="/assets/lottie/success.json"
              loop={false}
              autoplay
              keepLastFrame
              className="size-40"
            />

            <DialogTitle>Thank you</DialogTitle>
            <DialogDescription className="mt-1 text-center text-sm text-text-sub">
              You have been added to our mailing list, and will be the first to
              know about any updates.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 flex items-center sm:justify-center">
            <DialogClose asChild>
              <Button className="w-56">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
