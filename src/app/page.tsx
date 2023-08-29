/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/pages/movies/popular");
  }, []);
  return <div>Loading...</div>;
};

export default Home;
