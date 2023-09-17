import Link from "next/link";

// react-icons
import { HiPlus } from "react-icons/hi";

// styles
import styles from "../header.module.css";

const WishlistIcon: React.FC = (): JSX.Element => {
  return (
    <Link href="/pages/watchlist/all" className={styles.watchlist_link}>
      <span className={styles.watchlist_icon}>
        <HiPlus />
      </span>
      <span className={styles.watchlist_text}>Wishlist</span>
    </Link>
  );
};

export default WishlistIcon;
