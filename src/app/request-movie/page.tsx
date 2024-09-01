import React from "react";

import MovieRequestForm from "./_components/movie-request-form";

export default function RequestMoviePage() {
  return (
    <main className="container py-16 sm:py-24">
      <h1 className="mx-auto max-w-[750px] text-center text-4xl font-bold leading-snug text-text sm:text-6xl">
        What you want to{" "}
        <span className="rounded-xl bg-[#B9F18C] px-1.5 py-0.5 dark:bg-[#FF499E]">
          watch
        </span>{" "}
        next ?
      </h1>
      <p className="mx-auto mt-2 max-w-[750px] text-center text-sm text-text-sub sm:text-base">
        Tell us what you want to see on your city, and we’ll release it for you.
        We know you want to celebrate the movie we also do the same.
      </p>

      <MovieRequestForm />
    </main>
  );
}