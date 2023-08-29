// lib
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

// components
import MovieCard from "@/components/Card/MovieCard/MovieCard";

export default async function TopRated() {
  const topRatedMovies = await getMoviesOrShows("top_rated", "movie");

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase font-bold">
        Top Rated Movies
      </span>
      <div className="inner">
        {topRatedMovies.map((movie: Card) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
