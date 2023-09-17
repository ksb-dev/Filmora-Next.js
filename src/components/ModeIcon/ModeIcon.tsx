import { useRef, useEffect } from "react";

// redux
import { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "@/redux/services/getMode";

// react-icons
import { PiSunFill } from "react-icons/pi";
import { BiSolidMoon } from "react-icons/bi";

// styles
import styles from "./mode.module.css";

const ModeIcon: React.FC = (): JSX.Element => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const dispatch = useDispatch();
  const coverRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    mode
      ? (coverRef.current!.style.transform = "translateX(23px)")
      : (coverRef.current!.style.transform = "translateX(2px)");
  }, [mode]);

  const handleMode = () => {
    dispatch(toggleMode());
  };

  return (
    <div
      className={
        styles.mode + (mode ? " blackBg1 whiteColor1" : " whiteBg2 blackColor1")
      }
      onClick={handleMode}
    >
      <p className={styles.sun_div}>
        <span className={styles.sun_icon}>
          <PiSunFill />
        </span>
      </p>
      <p className={styles.moon_div}>
        <span className={styles.moon_icon}>
          <BiSolidMoon />
        </span>
      </p>
      <p
        ref={coverRef}
        className={styles.cover + (mode ? " whiteBg2" : " blackBg1")}
      >
        cover
      </p>
    </div>
  );
};

export default ModeIcon;
