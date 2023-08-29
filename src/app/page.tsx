// lib
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

// components
import MovieCard from "@/components/Card/MovieCard/MovieCard";

export default async function Home() {
  const popularMovies = await getMoviesOrShows("popular", "movie");

  if (!popularMovies) throw new Error("Failed to fetch data!");

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase font-bold">
        Popular Movies
      </span>
      <div className="inner">
        {popularMovies &&
          popularMovies.map((movie: any, index: any) => (
            <MovieCard key={index} movie={movie} />
          ))}
      </div>
    </main>
  );
}
