/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from "react";

// redux
import { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "@/redux/services/getMode";

// react-icons
import { PiSunLight, PiMoonStarsLight } from "react-icons/pi";

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
            <PiSunLight />
          </span>
        )}
      </p>
    </div>
  );
};

export default ModeIcon;
