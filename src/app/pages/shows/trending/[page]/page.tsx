// lib
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

// components
import ShowCard from "@/components/Card/ShowCard/ShowCard";
import Pagination from "@/components/Pagination/Pagination";

export default async function Trending({ params }: any) {
  const trendingShows = await getMoviesOrShows("trending", "tv", params.page);

  if (!trendingShows.results)
    throw new Error("Failed to fetch trending shows!");

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase font-bold">
        Trending Shows
      </span>
      <div className="inner">
        {trendingShows.results.map((show: Card) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
      <Pagination />
    </main>
  );
}
