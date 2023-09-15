"use client";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// components
import MediaTypeOption from "./MediaTypeOption/MediaTypeOption";
import ModeIcon from "../ModeIcon/ModeIcon";

// styles
import styles from "./mainNav.module.css";

const MainNav: React.FC = () => {
  const mode: boolean = useSelector((state: RootState) => state.mode.mode);

  return (
    <div className={styles.main_nav + (mode ? " whiteBg2" : " blackBg2")}>
      <div className={styles.main_nav_inner}>
        <div className={styles.main_nav_inner_1}>
          <MediaTypeOption option={"movies"} />
          <MediaTypeOption option={"tv shows"} />

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
