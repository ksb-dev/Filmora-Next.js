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
          src={poster_path === null ? url : IMG_PATH + poster_path}
          alt={title}
          style={{
            width: "50px",
            height: "80px",
            marginRight: "1rem",
          }}
        />
      </div>
      <div className="flex flex-col">
        <span className="inline-block mb-[0.25rem] font-medium">{title}</span>
        <span className="text-[0.8rem] text-[#999]">
          {date && moment(date).format("Do MMM, YYYY")}
        </span>
      </div>
    </Link>
  );
};

export default Result;
