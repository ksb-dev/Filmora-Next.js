"use client";

import Image from "next/image";

// redux
import { useSelector } from "react-redux";

// moment
import moment from "moment";

// Circular progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { RootState } from "@/redux/store";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w342";

const ShowCard = ({ show }: any) => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const {
    name,
    vote_average,
    first_air_date,
    poster_path,
    backdrop_path,
    id,
    genre_ids,
    overview,
  } = show;

  const getClassBg = (vote: any) => {
    if (vote >= 7.5) {
      return "greenBg";
    } else if (vote >= 5) {
      return "orangeBg";
    } else {
      return "redBg";
    }
  };

  return (
    <div>
      <div>
        <div className="relative h-[260px]">
          <Image
            src={poster_path === null ? url : IMG_PATH + poster_path}
            alt={name}
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
              strokeWidth={6}
              styles={buildStyles({
                pathColor: "#fff",
              })}
            />
            <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[0.8rem] font-medium">
              {Number(String(vote_average).substring(0, 3))}
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-[2rem]">
          <span className="inline-block font-medium">{name}</span>
          <span className="inline-block pt-[0.5rem] text-[#777] text-[0.8rem]">
            {first_air_date && moment(first_air_date).format("Do MMM, YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
