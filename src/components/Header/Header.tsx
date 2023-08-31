"use client";

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

// components
import Search from "@/components/Search/Search";

// styles
import styles from "./header.module.css";

const Header = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.mode.mode);

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

          {/* <span className="ml-[2rem] mr-[1rem] cursor-pointer font-semibold">
            Movies
          </span>

          <span className="ml-[1rem] cursor-pointer font-semibold">
            TV Shows
          </span> */}
        </div>

        {/* <div className={styles.part + " flex justify-center"}>
          <span className="mr-[1rem] cursor-pointer font-semibold">Movies</span>

          <span className="ml-[1rem] cursor-pointer font-semibold">
            TV Shows
          </span>
        </div> */}

        {/* <span
          className={
            styles.part + " flex items-center justify-center cursor-pointer"
          }
        >
          <Search />
        </span> */}

        <div className={styles.part + " flex items-center justify-end"}>
          <span className="mr-[1rem] cursor-pointer">
            <Search />
          </span>

          <div className="mr-[1rem]" onClick={handleMode}>
            {mode ? (
              <span className="cursor-pointer text-[1.2rem]">
                <BsMoonStars />
              </span>
            ) : (
              <span className="cursor-pointer text-[1.2rem]">
                <BsSun />
              </span>
            )}
          </div>

          {session ? (
            <button onClick={() => signOut()} className="font-semibold">
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/pages/login"
                className={
                  "link mr-[1rem] font-semibold " +
                  (mode ? "blackColor1" : "whiteColor1")
                }
              >
                Login
              </Link>
              <Link
                href="/pages/register"
                className={
                  "link mr-[1rem] font-semibold " +
                  (mode ? "blackColor1" : "whiteColor1")
                }
              >
                Register
              </Link>
            </>
          )}

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
