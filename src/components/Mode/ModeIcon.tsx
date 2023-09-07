/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from "react";

// redux
import { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "@/redux/services/getMode";

// react-icons
import {
  PiSunLight,
  PiMoonStarsLight,
  PiMoonStarsFill,
  PiSunFill,
} from "react-icons/pi";
import { RiMoonClearFill } from "react-icons/ri";
import { BsFillSunFill, BsMoonStarsFill, BsSun } from "react-icons/bs";

// styles
import styles from "./mode.module.css";

const ModeIcon: React.FC = (): JSX.Element => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const dispatch = useDispatch();

  const handleMode = () => {
    dispatch(toggleMode());
  };

  return (
    <div className={styles.mode}>
      <p
        onClick={handleMode}
        className={
          styles.moon +
          (mode ? " whiteBg2 blackColor1" : " blackBg2 whiteColor1")
        }
      >
        {mode ? (
          <span className={styles.moon_icon}>
            <PiMoonStarsLight />
          </span>
        ) : (
          <span className={styles.sun_icon}>
            <BsSun />
          </span>
        )}
      </p>
    </div>
  );
};

export default ModeIcon;
