/* eslint-disable react-hooks/exhaustive-deps */
// "use client";

// import { useEffect } from "react";

// import { useRouter } from "next/navigation";

// const Home = () => {
//   const router = useRouter();

//   useEffect(() => {
//     router.push("/pages/movies/popular/1");
//   }, []);
//   return <div>Loading...</div>;
// };

// export default Home;
import { Metadata } from "next";

// lib
import { getMoviesOrTv } from "@/lib/getMoviesOrTv";

// components
import Card from "@/components/Card/Card";
import Pagination from "@/components/Pagination/Pagination";

export default async function Home() {
  const data = await getMoviesOrTv("popular", 1, "movies", "popular");

  return (
    <main className="main">
      <div className="flex items-center justify-between mb-[2rem]">
        <p className="max-w-fit font-[700] uppercase">Popular Movies</p>
        <p>Sort</p>
      </div>
      <div className="inner">
        {data.results.map((info: Card) => (
          <Card key={info.id} info={info} />
        ))}
      </div>
      <Pagination />
    </main>
  );
}
