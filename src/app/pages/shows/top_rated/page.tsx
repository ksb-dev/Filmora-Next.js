// lib
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

// components
import ShowCard from "@/components/Card/ShowCard/ShowCard";

export default async function TopRated() {
  const topRatedShows = await getMoviesOrShows("top_rated", "tv");

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase font-bold">
        Top Rated Shows
      </span>
      <div className="inner">
        {topRatedShows.map((show: Card) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </main>
  );
}
