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
        "header shadow-[0_2px_8px_rgba(0,0,0,0.2)] " +
        (mode ? "whiteBg1 blackColor1" : "blackBg2 whiteColor1")
      }
    >
      <div className="flex items-center justify-between max-w-[1280px] w-[1280px]">
        <div>
          <Link
            href="/"
            className="link relative flex text-[2rem] font-bold text-[var(--blue)]"
          >
            <span className="text">Film</span>
            <span className="absolute left-[4rem] text-[3rem] top-1">
              <GiFilmSpool />
            </span>
            <span className="ml-[2.85rem]">ra</span>
          </Link>
        </div>

        <div>Search</div>

        <div className="flex items-center">
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
            <button onClick={() => signOut()}>Logout</button>
          ) : (
            <>
              <Link
                href="/pages/login"
                className={
                  "link mr-[1rem] " + (mode ? "blackColor1" : "whiteColor1")
                }
              >
                Login
              </Link>
              <Link
                href="/pages/register"
                className={
                  "link mr-[1rem] " + (mode ? "blackColor1" : "whiteColor1")
                }
              >
                Register
              </Link>
            </>
          )}

          <Link
            href="/pages/about"
            className={"link " + (mode ? "blackColor1" : "whiteColor1")}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
