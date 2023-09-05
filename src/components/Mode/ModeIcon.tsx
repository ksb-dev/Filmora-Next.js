/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, useState } from "react";

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
  const sunRef = useRef<HTMLSpanElement>(null)!;
  const moonRef = useRef<HTMLSpanElement>(null)!;
  const [state, setState] = useState(false);

  useEffect(() => {
    if (mode) {
      moonRef.current!.style.transform = "translate(-50%, -50%) scale(1)";
      sunRef.current!.style.transform = "translate(-50%, -50%) scale(0)";
    } else {
      sunRef.current!.style.transform = "translate(-50%, -50%) scale(1)";
      moonRef.current!.style.transform = "translate(-50%, -50%) scale(0)";
    }
  }, [mode]);

  const handleMode = () => {
    dispatch(toggleMode());
    setState(!state);
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
        <span ref={moonRef} className={styles.moon_icon}>
          <PiMoonStarsLight />
        </span>
        <span ref={sunRef} className={styles.sun_icon}>
          <PiSunLight />
        </span>
      </p>
    </div>
  );
};

export default ModeIcon;
