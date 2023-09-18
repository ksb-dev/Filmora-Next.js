// react-icons
import { AiOutlineHome } from "react-icons/ai";

// styles
import styles from "../header.module.css";

const HomeIcon: React.FC = (): JSX.Element => {
  return (
    <p className={styles.home_link}>
      <span className={styles.home_icon}>
        <AiOutlineHome />
      </span>
      <span className={styles.home_text}>Home</span>
    </p>
  );
};

export default HomeIcon;
