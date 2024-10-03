import React from "react";

export default function AboutUsPage() {
  return (
    <main className="container py-16 sm:flex sm:py-24">
      <div className="flex flex-col gap-10 sm:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center gap-2 sm:items-start sm:justify-start">
          <h1 className="text-center text-4xl font-bold text-text sm:text-balance sm:text-left sm:text-6xl sm:font-extrabold sm:leading-tight">
            Are you{" "}
            <span className="rounded-xl bg-[#B9F18C] px-1.5 py-0.5 dark:bg-[#FF499E]">
              excited
            </span>{" "}
            about us, want to know more ?
          </h1>
          <p className="text-center text-sm text-text-sub sm:text-start sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            sapiente alias perspiciatis, ipsam blanditiis quidem soluta non.
            Obcaecati ipsam qui officia nemo rem, quasi facere, vero, eius
            deserunt nulla nam?
          </p>
        </div>

        <div className="aspect-video flex-1 rounded-2xl bg-gray-400"></div>
      </div>
    </main>
  );
}
