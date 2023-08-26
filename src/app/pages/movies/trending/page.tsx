/* eslint-disable react-hooks/exhaustive-deps */
//"use client";

import { useEffect } from "react";

// redux
//import { useSelector } from "react-redux";
//import { getMovies } from "@/redux/services/getMovies";

// components
import MovieCard from "@/components/MovieCard/MovieCard";
//import { useAppDispatch, RootState } from "@/redux/store";

async function getTrendingMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&&language=en-US`
  );
  const data = await res.json();

  return data.results;
}

export default async function Trending() {
  const trendingMovies = await getTrendingMovies();
  // const dispatch = useAppDispatch();
  // const { sortedMovies, loading, error } = useSelector(
  //   (state: RootState) => state.movies
  // );

  // useEffect(() => {
  //   dispatch(getMovies("now_playing"));
  // }, []);

  return (
    <main className="main">
      {trendingMovies.map((movie: any, index: any) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </main>
  );
}
