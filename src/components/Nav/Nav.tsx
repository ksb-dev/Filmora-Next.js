"use client";

import { useEffect, useRef, RefObject } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// react-icons
import { BsGraphUpArrow, BsStar } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";

// styles
import styles from "./nav.module.css";

interface NavProp {
  forwardedRef?: RefObject<HTMLDivElement>;
}

const Nav: React.FC<NavProp> = ({ forwardedRef }) => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const pathname = usePathname();
  const router = useRouter();

  const hideNav = () => {
    if (forwardedRef && forwardedRef.current) {
      forwardedRef.current!.style.transform = "translateX(-100%)";
    }
  };

  return (
    <div className={styles.nav}>
      <div className="pb-[1rem] mb-[1rem]">
        <p className="mb-[1rem] font-bold uppercase">Options</p>
        <div className="cursor-pointer mb-[1rem] flex items-center">
          {pathname.includes("/pages/movies/") || pathname === "/" ? (
            <div
              className="flex items-center hover:font-semibold"
              onClick={() => {
                router.push("/pages/movies/popular/1");
                hideNav();
              }}
            >
              <p className="relative inline-block h-[21px] w-[21px] mr-[0.5rem] text-white rounded-[50%] bg-[var(--blue)]">
                <span className="absolute bottom-[3px] left-[2px] ">
                  <BiCheck />
                </span>
              </p>
              <span>Movies</span>
            </div>
          ) : (
            <p
              className="flex items-center hover:font-semibold"
              onClick={() => {
                router.push("/pages/movies/popular/1");
                hideNav();
              }}
            >
              <span className="inline-block h-[20px] w-[20px] border border-[#999] mr-[0.5rem] rounded-[50%] "></span>
              <span>Movies</span>
            </p>
          )}
        </div>

        <div className="cursor-pointer mb-[0.5rem] flex items-center">
          {pathname.includes("/pages/tv/") ? (
            <div
              className="flex items-center hover:font-semibold"
              onClick={() => {
                router.push("/pages/movies/popular/1");
                hideNav();
              }}
            >
              <p className="relative inline-block h-[21px] w-[21px] mr-[0.5rem] text-white rounded-[50%] bg-[var(--blue)]">
                <span className="absolute bottom-[3px] left-[2px] ">
                  <BiCheck />
                </span>
              </p>
              <span>Tv Shows</span>
            </div>
          ) : (
            <p
              className="flex items-center hover:font-semibold"
              onClick={() => {
                router.push("/pages/tv/popular/1");
                hideNav();
              }}
            >
              <span className="inline-block h-[20px] w-[20px] border border-[#999] mr-[0.5rem] rounded-[50%] "></span>
              <span>Tv Shows</span>
            </p>
          )}
        </div>
      </div>

      <div className="categories mb-[1rem]">
        <p className="mb-[1rem] font-bold uppercase">Categories</p>

        <Link
          href={
            pathname.includes("movies")
              ? "/pages/movies/popular/1"
              : "/pages/tv/popular/1"
          }
          className={
            "link flex items-center mb-[1rem] hover:font-semibold " +
            (mode ? "blackColor1" : "whiteColor1")
          }
          onClick={hideNav}
        >
          <span className="mr-[1rem]">
            <BsGraphUpArrow />
          </span>
          Popular
        </Link>

        <Link
          href={
            pathname.includes("movies")
              ? "/pages/movies/trending/1"
              : "/pages/tv/trending/1"
          }
          className={
            "link flex items-center mb-[1rem] hover:font-semibold " +
            (mode ? "blackColor1" : "whiteColor1")
          }
          onClick={hideNav}
        >
          <span className="mr-[1rem]">
            <AiOutlineFire />
          </span>
          Trending
        </Link>

        <Link
          href={
            pathname.includes("movies")
              ? "/pages/movies/top_rated/1"
              : "/pages/tv/top_rated/1"
          }
          className={
            "link flex items-center mb-[1rem] hover:font-semibold " +
            (mode ? "blackColor1" : "whiteColor1")
          }
          onClick={hideNav}
        >
          <span className="mr-[1rem]">
            <BsStar />
          </span>
          Top Rated
        </Link>
      </div>

      <div className="categories">
        <p className="mb-[1rem] font-bold uppercase">Genres</p>
      </div>
    </div>
  );
};

export default Nav;
