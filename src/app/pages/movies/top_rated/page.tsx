/* eslint-disable react-hooks/exhaustive-deps */
//"use client";

//import { useEffect } from "react";

// redux
//import { useSelector } from "react-redux";
//import { getMovies } from "@/redux/services/getMovies";

// components
import MovieCard from "@/components/Card/MovieCard/MovieCard";
//import { useAppDispatch, RootState } from "@/redux/store";

async function getTopRatedMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();

  return data.results;
}

export default async function TopRated() {
  const topRatedMovies = await getTopRatedMovies();
  //const dispatch = useAppDispatch();
  // const { sortedMovies, loading, error } = useSelector(
  //   (state: RootState) => state.movies
  // );

  // useEffect(() => {
  //   dispatch(getMovies("top_rated"));
  // }, []);

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase font-bold">
        Top Rated Movies
      </span>
      <div className="inner">
        {topRatedMovies.map((movie: any, index: any) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </main>
  );
}
