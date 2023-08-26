"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// react-icons
import { BsGraphUpArrow, BsStar } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";

const Nav = () => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={
        "nav  " + (mode ? "whiteBg1 blackColor1" : "blackBg2 whiteColor1")
      }
    >
      <div className="pb-[1rem] mb-[1rem]">
        <p className="mb-[1rem] font-bold uppercase text-[0.9rem]">Options</p>
        <div className="cursor-pointer mb-[0.5rem] flex items-center">
          {pathname.includes("/pages/movies/") ? (
            <div className="flex items-center">
              <p className="relative inline-block h-[20px] w-[20px] mr-[0.5rem] bg-[var(--blue)] text-white border border-[var(--blue)] rounded-[50%]">
                <span className="absolute bottom-[1px] left-[1px] ">
                  <BiCheck />
                </span>
              </p>
              <span>Movies</span>
            </div>
          ) : (
            <p
              className="flex items-center"
              onClick={() => router.push("/pages/movies/popular")}
            >
              <span className="inline-block h-[20px] w-[20px] border border-[#999] mr-[0.5rem] rounded-[50%] "></span>
              <span>Movies</span>
            </p>
          )}
        </div>

        <div className="cursor-pointer mb-[0.5rem] flex items-center">
          {pathname.includes("/pages/shows/") ? (
            <div className="flex items-center">
              <p className="relative inline-block h-[20px] w-[20px] mr-[0.5rem] bg-[var(--blue)] text-white border border-[var(--blue)] rounded-[50%]">
                <span className="absolute bottom-[1px] left-[1px] ">
                  <BiCheck />
                </span>
              </p>
              <span>Shows</span>
            </div>
          ) : (
            <p
              className="flex items-center"
              onClick={() => router.push("/pages/shows/popular")}
            >
              <span className="inline-block h-[20px] w-[20px] border border-[#999] mr-[0.5rem] rounded-[50%] "></span>
              <span>Shows</span>
            </p>
          )}
        </div>
      </div>
      <div className="categories">
        <p className="mb-[1rem] font-bold uppercase text-[0.9rem]">
          Categories
        </p>
        <Link
          href={
            pathname.includes("movies")
              ? "/pages/movies/popular"
              : "/pages/shows/popular"
          }
          className={
            "link flex items-center mb-[0.5rem] " +
            (mode ? "blackColor1" : "whiteColor1")
          }
        >
          <span className="mr-[1rem]">
            <BsGraphUpArrow />
          </span>
          Popular
        </Link>
        <Link
          href={
            pathname.includes("movies")
              ? "/pages/movies/trending"
              : "/pages/shows/trending"
          }
          className={
            "link flex items-center mb-[0.5rem] " +
            (mode ? "blackColor1" : "whiteColor1")
          }
        >
          <span className="mr-[1rem]">
            <AiOutlineFire />
          </span>
          Trending
        </Link>
        <Link
          href={
            pathname.includes("movies")
              ? "/pages/movies/top_rated"
              : "/pages/shows/top_rated"
          }
          className={
            "link flex items-center mb-[0.5rem] " +
            (mode ? "blackColor1" : "whiteColor1")
          }
        >
          <span className="mr-[1rem]">
            <BsStar />
          </span>
          Top Rated
        </Link>
      </div>
    </div>
  );
};

export default Nav;
