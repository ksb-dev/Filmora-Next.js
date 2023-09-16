"use client";

import { RefObject } from "react";

// components
import Title from "../Title/Title";
import SearchIcon from "./components/SearchIcon";
import WatchlistIcon from "./components/WatchlistIcon";
import ProfileIcon from "./components/ProfileIcon";
import MenuIcon from "./components/MenuIcon";

// styles
import styles from "./header.module.css";

interface HeaderProp {
  forwardedRef: RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProp> = ({ forwardedRef }) => {
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
          <SearchIcon />
          <WatchlistIcon />
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
