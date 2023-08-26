/* eslint-disable react-hooks/exhaustive-deps */
//"use client";

//import { useEffect } from "react";

// redux
//import { useSelector } from "react-redux";
//import { getMovies } from "@/redux/services/getMovies";

// components
import ShowCard from "@/components/ShowCard/ShowCard";
//import { useAppDispatch, RootState } from "@/redux/store";

async function getTopRatedShows() {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();

  return data.results;
}

export default async function TopRated() {
  const topRatedShows = await getTopRatedShows();
  // const dispatch = useAppDispatch();
  // const { sortedMovies, loading, error } = useSelector(
  //   (state: RootState) => state.movies
  // );

  // useEffect(() => {
  //   dispatch(getMovies("now_playing"));
  // }, []);

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase text-[0.9rem] font-bold">
        Top Rated Shows
      </span>
      <div className="inner">
        {topRatedShows.map((show: any, index: any) => (
          <ShowCard key={index} show={show} />
        ))}
      </div>
    </main>
  );
}
