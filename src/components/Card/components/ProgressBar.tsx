// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Circular progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// styles
import styles from "../card.module.css";

const ProgressBar: React.FC<{ vote_average: number }> = ({ vote_average }) => {
  const mode = useSelector((state: RootState) => state.mode.mode);

  const getClassBg = (vote: any) => {
    if (vote >= 7.5) {
      return "greenBg";
    } else if (vote >= 5) {
      return "orangeBg";
    } else {
      return "redBg";
    }
  };

  return (
    <div
      className={
        styles.vote +
        (mode ? " lightBorder " : " darkBorder ") +
        getClassBg(vote_average)
      }
    >
      <CircularProgressbar
        value={vote_average * 10}
        strokeWidth={5}
        styles={buildStyles({
          pathColor: "#fff",
        })}
      />
      <span className={styles.vote_text}>
        {Number(String(vote_average).substring(0, 3))}
      </span>
    </div>
  );
};

export default ProgressBar;
