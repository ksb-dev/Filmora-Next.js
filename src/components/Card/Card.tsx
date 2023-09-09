"use client";

import { useRef } from "react";

import Image from "next/legacy/image";
import { usePathname } from "next/navigation";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// moment
import moment from "moment";

// Circular progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Link from "next/link";

// recat-icons
import { BsPlus } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

// components
import ProgressBar from "./ProgressBar";
import CardImage from "./CardImage";
import WishlistBtn from "./WishlistBtn";

// styles
import styles from "./card.module.css";

type Props = {
  key: number;
  info: Card;
};

export default function Card({ info }: Props) {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const {
    id,
    title,
    poster_path,
    vote_average,
    release_date,
    name,
    first_air_date,
  } = info;
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const type = pathname.split("/")[2];
  const path =
    type === "movies"
      ? `/pages/movies/movie_detail/${id}`
      : `/pages/tv/tv_detail/${id}`;
  const mediaType = type === "movies" ? "movie" : "tv";

  const showWishlistBtn = () => {
    ref.current!.style.transform = "scale(1)";
  };

  const hideWishlistBtn = () => {
    ref.current!.style.transform = "scale(0)";
  };

  return (
    <div className={styles.card}>
      <Link
        href={path}
        onMouseOver={showWishlistBtn}
        onMouseLeave={hideWishlistBtn}
        className={styles.card_link + (mode ? " whiteBg1" : " blackBg1")}
      >
        <div className={styles.image_container}>
          <CardImage poster_path={poster_path} title={title ? title : name} />
          <ProgressBar vote_average={vote_average} />
        </div>

        <div
          className={styles.title_date_div + (mode ? " whiteBg1" : " blackBg1")}
        >
          <span className={styles.title}>{title ? title : name}</span>
          <span className={styles.date}>
            {release_date && moment(release_date).format("Do MMM, YYYY")}
            {first_air_date && moment(first_air_date).format("Do MMM, YYYY")}
          </span>
        </div>
      </Link>

      <WishlistBtn
        ref={ref}
        showWishlistBtn={showWishlistBtn}
        hideWishlistBtn={hideWishlistBtn}
        id={String(id)}
        mediaType={mediaType}
      />
    </div>
  );
}
