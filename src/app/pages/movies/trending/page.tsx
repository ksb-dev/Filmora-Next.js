// lib
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

// components
import MovieCard from "@/components/Card/MovieCard/MovieCard";

export default async function Trending() {
  const trendingMovies = await getMoviesOrShows("trending", "movie");

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase font-bold">
        Trending Movies
      </span>
      <div className="inner">
        {trendingMovies.map((movie: any, index: any) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </main>
  );
}
