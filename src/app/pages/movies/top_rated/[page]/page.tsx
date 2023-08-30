// lib
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

// components
import MovieCard from "@/components/Card/MovieCard/MovieCard";
import Pagination from "@/components/Pagination/Pagination";

export default async function TopRated({ params }: any) {
  const topRatedMovies = await getMoviesOrShows(
    "top_rated",
    "movie",
    params.page
  );

  if (!topRatedMovies.results)
    throw new Error("Failed to fetch top rated movies!");

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase font-bold">
        Top Rated Movies
      </span>
      <div className="inner">
        {topRatedMovies.results.map((movie: Card) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination />
    </main>
  );
}
