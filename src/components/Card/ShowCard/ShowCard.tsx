"use client";

import { useRef } from "react";

import Image from "next/legacy/image";

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
import ProgressBar from "../ProgressBar";
import CardImage from "../CardImage";
import WishlistBtn from "../WishlistBtn";

// styles
import styles from "../card.module.css";

type Props = {
  key: number;
  show: Card;
};

export default function ShowCard({ show }: Props) {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const { id, name, poster_path, vote_average, first_air_date } = show;
  const ref = useRef<HTMLDivElement>(null);

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
          <CardImage poster_path={poster_path} title={name} />
          <ProgressBar vote_average={vote_average} />
        </div>

        <div
          className={styles.title_date_div + (mode ? " whiteBg1" : " blackBg2")}
        >
          <span className={styles.title}>{name}</span>
          <span className={styles.date}>
            {first_air_date && moment(first_air_date).format("Do MMM, YYYY")}
          </span>
        </div>
      </Link>

      <WishlistBtn
        ref={ref}
        showWishlistBtn={showWishlistBtn}
        hideWishlistBtn={hideWishlistBtn}
      />
    </div>
  );
}
