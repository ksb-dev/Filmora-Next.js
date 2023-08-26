/* eslint-disable react-hooks/exhaustive-deps */
//"use client";

//import { useEffect } from "react";

// redux
//import { useSelector } from "react-redux";
//import { getMovies } from "@/redux/services/getMovies";

// components
import MovieCard from "@/components/MovieCard/MovieCard";
//import { useAppDispatch, RootState } from "@/redux/store";

async function getPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();

  return data.results;
}

export default async function Home() {
  const popularMovies = await getPopularMovies();
  // const dispatch = useAppDispatch();
  // const { sortedMovies, loading, error } = useSelector(
  //   (state: RootState) => state.movies
  // );

  // useEffect(() => {
  //   dispatch(getMovies("popular"));
  // }, []);

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase text-[0.9rem] font-bold">
        Popular Movies
      </span>
      <div className="inner">
        {popularMovies.map((movie: any, index: any) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </main>
  );
}
