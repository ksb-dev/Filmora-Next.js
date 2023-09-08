/* eslint-disable @next/next/no-img-element */
import Image from "next/legacy/image";
import Link from "next/link";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// moment
import moment from "moment";

// styles
import styles from "./result.module.css";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w342";

interface Props {
  result: SearchResult;
}

const Result: React.FC<Props> = ({ result }) => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const { poster_path } = result;
  const title = result.title ? result.title : result.name;
  const date = result.release_date
    ? result.release_date
    : result.first_air_date;

  return (
    <Link
      href="#"
      className={styles.result + (mode ? " whiteBg1" : " blackBg1")}
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
