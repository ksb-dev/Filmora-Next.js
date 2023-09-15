"use client";

import { RefObject } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// components
import Options from "./Options/Options";
import Categories from "./Categories/Categories";
import ModeIcon from "../ModeIcon/ModeIcon";

// styles
import styles from "./mainNav.module.css";

interface NavProp {
  forwardedRef?: RefObject<HTMLDivElement>;
}

const MainNav: React.FC<NavProp> = ({ forwardedRef }) => {
  const mode: boolean = useSelector((state: RootState) => state.mode.mode);

  const hideNav = () => {
    if (forwardedRef && forwardedRef.current) {
      forwardedRef.current!.style.transform = "translateX(-100%)";
    }
  };

  return (
    <div className={styles.main_nav + (mode ? " whiteBg2" : " blackBg2")}>
      <div className={styles.main_nav_inner}>
        <div className={styles.main_nav_inner_1}>
          <Options option={"movies"} />
          <Options option={"tv shows"} />

          <span className="inline-block mr-[2rem]">Genres</span>
        </div>

        <div>
          <ModeIcon />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
