// lib
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

// components
import ShowCard from "@/components/Card/ShowCard/ShowCard";
import Pagination from "@/components/Pagination/Pagination";

export default async function TopRated({ params }: any) {
  const topRatedShows = await getMoviesOrShows("top_rated", "tv", params.page);

  if (!topRatedShows.results)
    throw new Error("Failed to fetchp top rated shows!");

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase font-bold">
        Top Rated Shows
      </span>
      <div className="inner">
        {topRatedShows.results.map((show: Card) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
      <Pagination />
    </main>
  );
}
