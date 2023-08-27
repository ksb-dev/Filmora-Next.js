// lib
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

// components
import ShowCard from "@/components/Card/ShowCard/ShowCard";

export default async function Trending() {
  const trendingShows = await getMoviesOrShows("trending", "tv");

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase font-bold">
        Trending Shows
      </span>
      <div className="inner">
        {trendingShows.map((show: any, index: any) => (
          <ShowCard key={index} show={show} />
        ))}
      </div>
    </main>
  );
}
