import Link from "next/link";

// react-icons
import { AiOutlineHome } from "react-icons/ai";

// styles
import styles from "../header.module.css";

const HomeIcon: React.FC = (): JSX.Element => {
  return (
    <Link href="/" className={styles.home_link}>
      <span className={styles.home_icon}>
        <AiOutlineHome />
      </span>
      <span className={styles.home_text}>Home</span>
    </Link>
  );
};

export default HomeIcon;
