import Link from "next/link";

// react-icons
import { BsBookmarkPlus } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";

// styles
import styles from "./header.module.css";

const WishlistIcon: React.FC = (): JSX.Element => {
  return (
    <Link href="/pages/watchlist/all" className={styles.wishlist_link}>
      <span className={styles.wishlist_icon}>
        <HiPlus />
      </span>
      <span className={styles.wishlist_text}>Wishlist</span>
    </Link>
  );
};

export default WishlistIcon;
