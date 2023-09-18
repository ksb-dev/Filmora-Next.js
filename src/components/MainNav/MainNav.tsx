"use client";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// components
import MediaTypeOption from "./components/MediaTypeOption";
import GenreOption from "./components/GenreOption";
import ModeIcon from "../ModeIcon/ModeIcon";

// styles
import styles from "./mainNav.module.css";

const MainNav: React.FC = () => {
  const mode: boolean = useSelector((state: RootState) => state.mode.mode);

  return (
    <div className={styles.main_nav + (mode ? " whiteBg1" : " blackBg1")}>
      <div className={styles.main_nav_inner}>
        <div className={styles.main_nav_inner_1}>
          <MediaTypeOption option={"movies"} mode={mode} />
          <MediaTypeOption option={"tv shows"} mode={mode} />
          <GenreOption mode={mode} />
        </div>
        <div className="hidden md:flex">
          <ModeIcon />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
