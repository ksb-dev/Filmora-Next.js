"use client";

import { useRef } from "react";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

// redux
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "@/redux/services/getMode";
import { RootState } from "@/redux/store";

// react-icons
import { BsSun, BsMoonStars } from "react-icons/bs";
import { GiFilmSpool } from "react-icons/gi";
import { ImFilm } from "react-icons/im";
import { PiMonitor } from "react-icons/pi";
import { LiaUserCircle } from "react-icons/lia";

// components
import Search from "@/components/Search/Search";

// styles
import styles from "./header.module.css";

const Header: React.FC = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.mode.mode);
  const userRef = useRef<HTMLDivElement>(null);

  const handleMode = () => {
    dispatch(toggleMode());
  };

  return (
    <div
      className={
        styles.header +
        (mode ? " whiteBg1 blackColor1" : " blackBg2 whiteColor1")
      }
    >
      <div className={styles.header_inner}>
        <div className={styles.part + " flex items-center"}>
          <Link
            href="/pages/movies/popular/1"
            className="link relative flex text-[2rem] font-bold text-[var(--blue)]"
          >
            <span className="text">Film</span>
            <span className="absolute left-[4rem] text-[3rem] top-1">
              <GiFilmSpool />
            </span>
            <span className="ml-[2.85rem]">ra</span>
          </Link>
        </div>

        <div className={styles.part + " flex items-center justify-end"}>
          <span className="mr-[1rem] cursor-pointer">
            <Search />
          </span>

          <p className="cursor-pointer">
            <span className="inline-block mr-[1rem] text-[1.5rem] mt-[0.35rem]">
              <LiaUserCircle />
            </span>
          </p>

          <Link
            href="/pages/about"
            className={
              "link font-semibold " + (mode ? "blackColor1" : "whiteColor1")
            }
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
