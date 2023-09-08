import Link from "next/link";

// react-icons
import { BiBookmarkPlus } from "react-icons/bi";
import { BsBookmarkPlus } from "react-icons/bs";

// styles
import styles from "./header.module.css";

const WishlistIcon: React.FC = (): JSX.Element => {
  return (
    <Link href="/pages/wishlist" className={styles.wishlist_link}>
      <span className={styles.wishlist_icon}>
        <BsBookmarkPlus />
      </span>
      <span className={styles.wishlist_text}>Wishlist</span>
    </Link>
  );
};

export default WishlistIcon;
