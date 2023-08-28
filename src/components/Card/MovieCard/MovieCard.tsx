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
    ref.current!.style.transform = "translateX(0%)";
  };

  const hideWishlistBtn = () => {
    ref.current!.style.transform = "translateX(150%)";
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        transition: "filter 0.3s ease",
      }}
    >
      <Link
        href={`/pages/movie_info/${id}`}
        onMouseOver={showWishlistBtn}
        onMouseLeave={hideWishlistBtn}
        className={"hover:brightness-90 " + (mode ? "whiteBg1" : "blackBg2")}
        style={{
          display: "block",
          height: "100%",
        }}
      >
        <div className="relative h-[260px]">
          <Image
            src={poster_path === null ? url : IMG_PATH + poster_path}
            alt={title}
            layout="fill"
            objectFit="cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ boxShadow: "0 0 1px rgba(0,0,0,0.5)" }}
          />
          <div
            className={
              "absolute h-[50px] w-[50px] rounded-[50%] p-[0.2rem] bottom-[-25px] left-[1rem] " +
              (mode ? "lightBorder " : "darkBorder ") +
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
            <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[0.8rem] font-medium">
              {Number(String(vote_average).substring(0, 3))}
            </span>
          </div>
        </div>

        <div
          className={
            "flex flex-col pt-[2rem] p-[1rem] " +
            (mode ? "whiteBg1" : "blackBg2")
          }
        >
          <span className="inline-block font-medium">{title}</span>
          <span className="inline-block mt-[0.5rem] text-[#777] text-[0.85rem]">
            {release_date && moment(release_date).format("Do MMM, YYYY")}
          </span>
        </div>
      </Link>

      <div
        onMouseOver={showWishlistBtn}
        onMouseLeave={hideWishlistBtn}
        ref={ref}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          transform: "translateX(150%)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <p
          style={{
            position: "relative",
            background: "rgba(0,0,0,0.75)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            textTransform: "uppercase",
            fontWeight: "600",
            fontSize: "0.8rem",
            padding: "0.75rem 0",
            margin: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "1rem",
              marginRight: "0.25rem",
            }}
          >
            <HiPlus />
          </span>
          Wishlist
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
