// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// components
import Title from "../Header/Title";
import ModeIcon from "../Mode/ModeIcon";

// styles
import styles from "./smallHeader.module.css";

const SmallHeader = () => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  return (
    <div className={styles.small_header + (mode ? " whiteBg1" : " blackBg1")}>
      <Title />
      <ModeIcon />
    </div>
  );
};

export default SmallHeader;
