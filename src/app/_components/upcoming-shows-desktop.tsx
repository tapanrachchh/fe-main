import React from "react";
import Link from "next/link";
import { LucideArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import UpcomingMovieItem, {
  Languages,
} from "../events/_components/upcoming-movies/upcoming-movie-item";

const movies = [
  {
    name: "Deadpool & Wolverine",
    languages: ["English", "हिन्दी", "தமிழ்"],
    poster: "/assets/deadpool-and-wolverine.png",
    rating: 8,
  },
  {
    name: "Bad Boys: Ride or Die",
    languages: ["English", "हिन्दी", "தமிழ்"],
    poster: "/assets/bad-boys-ride-or-die.png",
    rating: 8,
  },
  {
    name: "Inside Out 2",
    languages: ["English"],
    poster: "/assets/inside-out.png",
    rating: 8,
  },
  {
    name: "Kingdom of the Planet of the Apes",
    languages: ["English", "हिन्दी"],
    poster: "/assets/planet-of-the-apes-potrate.png",
    rating: 8,
  },
  {
    name: "Kingdom of the Planet of the Apes",
    languages: ["English", "हिन्दी"],
    poster: "/assets/planet-of-the-apes-potrate.png",
    rating: 8,
  },
];

export function UpcomingShowsDesktop() {
  return (
    <section className="hidden py-24 md:block">
      <div className="container space-y-2 md:space-y-3">
        <Badge className="rounded-xl">Next to watch</Badge>
        <div className="flex items-center justify-between">
          <h2 className="flex-1 truncate text-4xl font-bold text-text">
            Upcoming Shows
          </h2>

          <Button
            className="flex h-auto items-center gap-1 rounded-none bg-transparent p-0 px-1 py-1.5 text-sm text-[#FF499E] focus-within:border-none focus-within:outline-none hover:bg-transparent focus:border-none focus:outline-none"
            asChild
          >
            <Link href="/events" className="flex items-center gap-1">
              View All
              <LucideArrowRight className="size-6" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-8 md:grid-cols-5">
          {movies.map(({ name, languages, poster, rating }, index) => (
            <UpcomingMovieItem
              key={name + index}
              languages={languages as Languages[]}
              name={name}
              poster={poster}
              rating={rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
