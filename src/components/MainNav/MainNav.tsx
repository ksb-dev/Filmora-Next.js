"use client";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// components
import MediaType from "./components/MediaType";
import ModeIcon from "../ModeIcon/ModeIcon";

// styles
import styles from "./mainNav.module.css";

const MainNav: React.FC = () => {
  const mode: boolean = useSelector((state: RootState) => state.mode.mode);

  return (
    <div className={styles.main_nav + (mode ? " whiteBg1" : " blackBg1")}>
      <div className={styles.main_nav_inner}>
        <div className={styles.main_nav_inner_1}>
          <MediaType option={"movies"} />
          <MediaType option={"tv shows"} />
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
