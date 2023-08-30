// lib
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

// components
import MovieCard from "@/components/Card/MovieCard/MovieCard";
import Pagination from "@/components/Pagination/Pagination";

export default async function Home({ params }: any) {
  const popularMovies = await getMoviesOrShows("popular", "movie", params.page);

  if (!popularMovies.results)
    throw new Error("Failed to fetch popular movies!");

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase font-bold">
        Popular Movies
      </span>
      <div className="inner">
        {popularMovies.results.map((movie: Card) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination />
    </main>
  );
}
