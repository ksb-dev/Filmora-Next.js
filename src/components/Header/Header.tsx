"use client";

import { RefObject } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// components
import Title from "../Title/Title";
import ModeIcon from "../ModeIcon/ModeIcon";
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
  const mode: boolean = useSelector((state: RootState) => state.mode.mode);

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
        <div className={styles.header_title_mode}>
          <Title />
          <ModeIcon />
        </div>

        <div className={styles.header_options}>
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
