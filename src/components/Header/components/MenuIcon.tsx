// react-icons
import { AiOutlineMenu } from "react-icons/ai";

// styles
import styles from "../header.module.css";

interface Prop {
  showNav: () => void;
}

const MenuIcon: React.FC<Prop> = ({ showNav }): JSX.Element => {
  return (
    <p className={styles.menu} onClick={() => showNav()}>
      <span className={styles.menu_icon}>
        <AiOutlineMenu />
      </span>
      <span className={styles.menu_text}>Menu</span>
    </p>
  );
};

export default MenuIcon;
