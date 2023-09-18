"use client";

import { RefObject } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// components
import Title from "../Title/Title";
import SearchIcon from "./components/SearchIcon";
import WatchlistIcon from "./components/WatchlistIcon";
import ProfileIcon from "./components/ProfileIcon";
import HomeIcon from "./components/HomeIcon";
import MenuIcon from "./components/MenuIcon";

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
    <div className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.header_title_mode}>
          <Title />
        </div>

        <div className={styles.header_options}>
          <MenuIcon showNav={showNav} />
          <HomeIcon />
          <SearchIcon />
          <WatchlistIcon />
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
