// lib
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

// components
import ShowCard from "@/components/Card/ShowCard/ShowCard";

export default async function Popular() {
  const popularShows = await getMoviesOrShows("popular", "tv");

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase font-bold">
        Popular Shows
      </span>
      <div className="inner">
        {popularShows.map((show: Card) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </main>
  );
}
