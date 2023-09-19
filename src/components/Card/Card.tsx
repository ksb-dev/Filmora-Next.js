"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// moment
import moment from "moment";

// components
import ProgressBar from "./components/ProgressBar";
import CardImage from "./components/CardImage";
import WatchlistBtn from "./components/WatchlistBtn";

// styles
import styles from "./card.module.css";

type Props = {
  key: number;
  info: Card;
  type?: string;
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
  const pathname = usePathname();
  const type = info.media_type ? info.media_type : pathname.split("/")[2];
  const path =
    type === "movies" || "movie"
      ? `/pages/movies/movie_detail/${id}`
      : `/pages/tv/tv_detail/${id}`;
  const mediaType = info.media_type
    ? info.media_type
    : type === "movies"
    ? "movie"
    : "tv";

  return (
    <div className={styles.card}>
      <Link
        href={path}
        className={styles.card_link + (mode ? " whiteBg2" : " blackBg2")}
      >
        <div className={styles.image_container}>
          <CardImage poster_path={poster_path} title={title ? title : name} />
          <ProgressBar vote_average={vote_average} />
        </div>

        <div
          className={styles.title_date_div + (mode ? " whiteBg2" : " blackBg2")}
        >
          <span className={styles.title}>{title ? title : name}</span>
          <span className={styles.date}>
            {release_date && moment(release_date).format("Do MMM, YYYY")}
            {first_air_date && moment(first_air_date).format("Do MMM, YYYY")}
          </span>
        </div>
      </Link>

      <WatchlistBtn id={String(id)} mediaType={mediaType} />
    </div>
  );
}
