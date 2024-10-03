import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export interface MovieCarouselItemProps {
  name: string;
  poster: string;
  movieLogo: string;
  language: string;
}

export default function MovieCarouselItem({
  name,
  poster,
  movieLogo,
  language,
}: MovieCarouselItemProps) {
  return (
    <div className="relative flex h-[200px] overflow-hidden rounded-2xl sm:h-[450px] sm:rounded-3xl">
      <Image
        src={poster}
        className="z-0 h-full w-full object-cover"
        alt="Planet of the Apes"
        fill
      />
      <div className="z-10 mt-0 flex h-full w-7/12 flex-col items-start justify-center gap-2 bg-gradient-to-r from-primary from-35% via-primary/80 via-75% to-transparent to-100% py-8 pr-4 ps-6 dark:from-secondary dark:via-secondary/80 sm:ps-12">
        <div className="relative w-8/12">
          <Image
            src={movieLogo}
            alt="Planet of the Apes"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full sm:w-60"
          />
        </div>
        <p className="text-xs font-semibold text-white/70">{language}</p>
        <Button
          size="sm"
          variant="secondary"
          className="mt-2 rounded-lg p-2 px-4 text-sm dark:bg-primary dark:text-black"
          asChild
        >
          <Link href={`/booking/${name.toLowerCase().replaceAll(" ", "-")}`}>
            Book Tickets
          </Link>
        </Button>
      </div>
    </div>
  );
}
