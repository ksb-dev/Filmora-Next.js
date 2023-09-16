/* eslint-disable @next/next/no-img-element */

import { RefObject } from "react";

import Link from "next/link";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// moment
import moment from "moment";

// styles
import styles from "../searchModal.module.css";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w342";

interface Props {
  result: SearchResult;
  mediaType: string;
  ref1: RefObject<HTMLDivElement>;
  setQuery: (value: string) => void;
  setSearchResults: (value: SearchResult[]) => void;
}

const Result: React.FC<Props> = ({
  result,
  mediaType,
  ref1,
  setQuery,
  setSearchResults,
}) => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const { poster_path } = result;
  const title = result.title ? result.title : result.name;
  const date = result.release_date
    ? result.release_date
    : result.first_air_date;

  let path =
    mediaType === "movie"
      ? `/pages/movies/movie_detail/${result.id}`
      : `/pages/tv/tv_detail/${result.id}`;

  return (
    <Link
      href={path}
      className={styles.result + (mode ? " whiteBg1" : " blackBg1")}
      onClick={() => {
        setQuery("");
        setSearchResults([]);
        ref1.current!.style.transform = "scale(0)";
        ref1.current!.style.opacity = "0";
      }}
    >
      <div>
        <img
          className={styles.img}
          src={poster_path === null ? url : IMG_PATH + poster_path}
          alt={title}
        />
      </div>
      <div className={styles.title_date_div}>
        <span className={styles.title}>{title}</span>
        <span className={styles.date}>
          {date && moment(date).format("Do MMM, YYYY")}
        </span>
      </div>
    </Link>
  );
};

export default Result;
