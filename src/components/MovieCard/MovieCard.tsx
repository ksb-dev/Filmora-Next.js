"use client";

import Image from "next/image";

// styles
import styles from "./MovieCard.module.css";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w342";

const MovieCard = ({ movie }: any) => {
  const {
    id,
    title,
    backdrop_path,
    original_language,
    poster_path,
    vote_average,
    release_date,
  } = movie;
  return (
    <div className="relative h-[260px] ">
      <Image
        src={poster_path === null ? url : IMG_PATH + poster_path}
        alt={title}
        //className="borderRadiusOne transition-opacity opacity-0 duration-[1s]"
        //className="borderRadiusOne"
        layout="fill"
        objectFit="contain"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        //onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    </div>
  );
};

export default MovieCard;
