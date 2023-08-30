// lib
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

// components
import MovieCard from "@/components/Card/MovieCard/MovieCard";
import Pagination from "@/components/Pagination/Pagination";

export default async function Trending({ params }: any) {
  const trendingMovies = await getMoviesOrShows(
    "trending",
    "movie",
    params.page
  );

  if (!trendingMovies.results)
    throw new Error("Failed to fetch trending movies!");

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase font-bold">
        Trending Movies
      </span>
      <div className="inner">
        {trendingMovies.results.map((movie: Card) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination />
    </main>
  );
}
