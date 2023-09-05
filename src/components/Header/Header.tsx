"use client";

import { RefObject, useRef } from "react";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// react-icons
import {
  BsSun,
  BsMoonStars,
  BsBookmarkPlus,
  BsInfoCircle,
} from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { GiFilmSpool } from "react-icons/gi";
import { ImFilm } from "react-icons/im";
import { PiMonitor } from "react-icons/pi";
import { SlUser } from "react-icons/sl";

// components
import Title from "./Title";
import ModeIcon from "../Mode/ModeIcon";
import SearchIcon from "./SearchIcon";
import WishlistIcon from "./WishlistIcon";
import ProfileIcon from "./ProfileIcon";
import MenuIcon from "./MenuIcon";

// styles
import styles from "./header.module.css";

interface HeaderProp {
  forwardedRef: RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProp> = ({ forwardedRef }) => {
  const mode = useSelector((state: RootState) => state.mode.mode);

  const showNav = () => {
    forwardedRef.current!.style.transform = "translateX(0%)";
  };

  return (
    <div
      className={
        styles.header +
        (mode ? " whiteBg1 blackColor1" : " blackBg1 whiteColor1")
      }
    >
      <div className={styles.header_inner}>
        <div className={"hidden md:flex items-center"}>
          <Title />
          <ModeIcon />
        </div>

        <div className={"flex items-center md:justify-end justify-between"}>
          <MenuIcon showNav={showNav} />
          <SearchIcon />
          <WishlistIcon />
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
