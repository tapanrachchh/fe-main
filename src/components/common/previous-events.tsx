"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { Button } from "../ui/button";
import { ArrowRightIcon, TicketIcon } from "../icons";
import { usePrevNextButtons } from "../../app/events/_components/running-shows/carousel-arrow-buttons";

export default function PreviousEvents() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    skipSnaps: true,
  });
  const { onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="container flex items-end justify-end py-4">
        <Button
          variant="outline"
          size="icon"
          className="!rounded-full border-secondary"
          onClick={onNextButtonClick}
        >
          <ArrowRightIcon className="size-3.5 stroke-primary" />
        </Button>
      </div>

      <div className="m-auto overflow-hidden" ref={emblaRef}>
        <div className="touce-action-pinch-zoom ml-4 mr-4 flex gap-4 md:container md:gap-12">
          <div className="w-full shrink-0 rounded-2xl border border-secondary bg-[#F8F8F8] p-3 dark:bg-secondary/50 md:w-[660px]">
            <Image
              src="/assets/penguin-bg.png"
              alt="previous event"
              width={0}
              height={0}
              sizes="100vw"
              objectFit="cover"
              className="h-auto w-full rounded-2xl"
            />
            <div className="md:flex md:items-center">
              <div className="mt-3 flex flex-1 gap-4">
                <div className="relative w-20">
                  <Image
                    src="/assets/penguin.png"
                    alt="previous event"
                    width={0}
                    height={0}
                    sizes="100vw"
                    objectFit="cover"
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-2 flex-1 space-y-1">
                  <span className="rounded-md bg-[#ABB7C4]/50 px-[8px] py-[5px] text-xs font-semibold text-text">
                    02 Jun, 2024
                  </span>
                  <h3 className="text-base font-semibold text-text">
                    The Penguin
                  </h3>
                  <p className="text-sm text-text-sub">
                    Cinepolis Vandana, Rajkot, 360001
                  </p>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <Button className="flex w-full items-center gap-3" size="lg">
                  <TicketIcon className="size-6 fill-button-foreground" />
                  Book In My City
                </Button>
                <p className="mt-1 text-center text-[10px] text-text-sub underline">
                  Rerelese this movie in your city to enjoy
                </p>
              </div>
            </div>
          </div>

          <div className="w-full shrink-0 rounded-2xl border border-secondary bg-[#F8F8F8] p-3 dark:bg-secondary/50 md:w-[660px]">
            <Image
              src="/assets/penguin-bg.png"
              alt="previous event"
              width={0}
              height={0}
              sizes="100vw"
              objectFit="cover"
              className="h-auto w-full rounded-2xl"
            />
            <div className="md:flex md:items-center">
              <div className="mt-3 flex flex-1 gap-4">
                <div className="relative w-20">
                  <Image
                    src="/assets/penguin.png"
                    alt="previous event"
                    width={0}
                    height={0}
                    sizes="100vw"
                    objectFit="cover"
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-2 flex-1 space-y-1">
                  <span className="rounded-md bg-[#ABB7C4]/50 px-[8px] py-[5px] text-xs font-semibold text-text">
                    02 Jun, 2024
                  </span>
                  <h3 className="text-base font-semibold text-text">
                    The Penguin
                  </h3>
                  <p className="text-sm text-text-sub">
                    Cinepolis Vandana, Rajkot, 360001
                  </p>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <Button className="flex w-full items-center gap-3" size="lg">
                  <TicketIcon className="size-6 fill-button-foreground" />
                  Book In My City
                </Button>
                <p className="mt-1 text-center text-[10px] text-text-sub underline">
                  Rerelese this movie in your city to enjoy
                </p>
              </div>
            </div>
          </div>

          <div className="w-full shrink-0 rounded-2xl border border-secondary bg-[#F8F8F8] p-3 dark:bg-secondary/50 md:w-[660px]">
            <Image
              src="/assets/penguin-bg.png"
              alt="previous event"
              width={0}
              height={0}
              sizes="100vw"
              objectFit="cover"
              className="h-auto w-full rounded-2xl"
            />
            <div className="md:flex md:items-center">
              <div className="mt-3 flex flex-1 gap-4">
                <div className="relative w-20">
                  <Image
                    src="/assets/penguin.png"
                    alt="previous event"
                    width={0}
                    height={0}
                    sizes="100vw"
                    objectFit="cover"
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-2 flex-1 space-y-1">
                  <span className="rounded-md bg-[#ABB7C4]/50 px-[8px] py-[5px] text-xs font-semibold text-text">
                    02 Jun, 2024
                  </span>
                  <h3 className="text-base font-semibold text-text">
                    The Penguin
                  </h3>
                  <p className="text-sm text-text-sub">
                    Cinepolis Vandana, Rajkot, 360001
                  </p>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <Button className="flex w-full items-center gap-3" size="lg">
                  <TicketIcon className="size-6 fill-button-foreground" />
                  Book In My City
                </Button>
                <p className="mt-1 text-center text-[10px] text-text-sub underline">
                  Rerelese this movie in your city to enjoy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
