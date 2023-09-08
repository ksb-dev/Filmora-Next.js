// react-icons
import { GiHamburgerMenu } from "react-icons/gi";

// styles
import styles from "./menuIcon.module.css";

interface Prop {
  showNav: () => void;
}

const MenuIcon: React.FC<Prop> = ({ showNav }): JSX.Element => {
  return (
    <p className={styles.menu} onClick={() => showNav()}>
      <span className={styles.menu_icon}>
        <GiHamburgerMenu />
      </span>
      <span className={styles.menu_text}>Menu</span>
    </p>
  );
};

export default MenuIcon;
