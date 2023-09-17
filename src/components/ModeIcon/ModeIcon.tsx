// redux
import { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "@/redux/services/getMode";

// react-icons
import {
  PiMoonStarsLight,
  PiMoonStarsFill,
  PiMoonFill,
  PiSunFill,
  PiSunLight,
} from "react-icons/pi";
import { BsSun } from "react-icons/bs";
import { BiSolidSun } from "react-icons/bi";
import { HiMiniSun } from "react-icons/hi2";

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
      <p onClick={handleMode} className={styles.mode_div}>
        {mode ? (
          <span className={styles.moon_icon}>
            <PiMoonStarsFill />
          </span>
        ) : (
          <span className={styles.sun_icon}>
            <BiSolidSun />
          </span>
        )}
      </p>
    </div>
  );
};

export default ModeIcon;
