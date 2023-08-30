// lib
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

// components
import ShowCard from "@/components/Card/ShowCard/ShowCard";
import Pagination from "@/components/Pagination/Pagination";

export default async function Popular({ params }: any) {
  const popularShows = await getMoviesOrShows("popular", "tv", params.page);

  if (!popularShows.results) throw new Error("Failed to fetch popular shows!");

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase font-bold">
        Popular Shows
      </span>
      <div className="inner">
        {popularShows.results.map((show: Card) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
      <Pagination />
    </main>
  );
}
