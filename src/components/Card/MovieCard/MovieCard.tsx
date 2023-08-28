"use client";

import { useRef } from "react";

import Image from "next/image";

// redux
import { useSelector } from "react-redux";

// moment
import moment from "moment";

// Circular progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { RootState } from "@/redux/store";
import Link from "next/link";

// recat-icons
import { BsPlus } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

// styles
import styles from "../card.module.css";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w342";

const MovieCard = ({ movie }: any) => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const { id, title, poster_path, vote_average, release_date } = movie;
  const ref = useRef<any>(null);

  const getClassBg = (vote: any) => {
    if (vote >= 7.5) {
      return "greenBg";
    } else if (vote >= 5) {
      return "orangeBg";
    } else {
      return "redBg";
    }
  };

  const showWishlistBtn = () => {
    ref.current!.style.transform = "scale(1)";
  };

  const hideWishlistBtn = () => {
    ref.current!.style.transform = "scale(0)";
  };

  return (
    <div className={styles.card}>
      <Link
        href={`/pages/movie_info/${id}`}
        onMouseOver={showWishlistBtn}
        onMouseLeave={hideWishlistBtn}
        className={styles.card_link + (mode ? " whiteBg1" : " blackBg2")}
      >
        <div className={styles.image_container}>
          <Image
            src={poster_path === null ? url : IMG_PATH + poster_path}
            alt={title}
            layout="fill"
            objectFit="cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
          <div
            className={
              styles.vote +
              (mode ? " lightBorder " : " darkBorder ") +
              getClassBg(vote_average)
            }
          >
            <CircularProgressbar
              value={vote_average * 10}
              strokeWidth={5}
              styles={buildStyles({
                pathColor: "#fff",
              })}
            />
            <span className={styles.vote_text}>
              {Number(String(vote_average).substring(0, 3))}
            </span>
          </div>
        </div>

        <div
          className={styles.title_date_div + (mode ? " whiteBg1" : " blackBg2")}
        >
          <span className={styles.title}>{title}</span>
          <span className={styles.date}>
            {release_date && moment(release_date).format("Do MMM, YYYY")}
          </span>
        </div>
      </Link>

      <div
        onMouseOver={showWishlistBtn}
        onMouseLeave={hideWishlistBtn}
        ref={ref}
        className={styles.add_btn_container}
      >
        <p className={styles.add_btn}>
          <span className={styles.add_btn_icon}>
            <HiPlus />
          </span>
          Wishlist
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
