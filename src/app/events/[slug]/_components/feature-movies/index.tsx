import env from "@/lib/env";
import { Pagination } from "@/types/pagination";
import { Show } from "@/types/show.type";

import { FeatureMovesDesktop } from "./feature-movie-desktop";
import { FeatureMoviesMobile } from "./feature-movies-mobile";

async function getFeaturedShows(slug: string): Promise<Pagination<Show>> {
  const url = new URL(env.NEXT_PUBLIC_API_URL + "/shows/" + slug + "/similar");
  url.searchParams.append("limit", "5");
  url.searchParams.append("page", "1");
  const options = {
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(url.toString(), options);
  return await response.json();
}

export interface FeatureMoviesProps {
  slug: string;
}

export async function FeatureMovies({ slug }: FeatureMoviesProps) {
  const { data: shows } = await getFeaturedShows(slug);

  return (
    <>
      <FeatureMoviesMobile shows={shows} />
      <FeatureMovesDesktop shows={shows} />
    </>
  );
}
