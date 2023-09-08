import Link from "next/link";

// react-icons
import { BiBookmarkPlus } from "react-icons/bi";

// styles
import styles from "./wishlist.module.css";

const WishlistIcon: React.FC = (): JSX.Element => {
  return (
    <Link href="/pages/wishlist" className={styles.wishlist}>
      <span className={styles.wishlist_icon}>
        <BiBookmarkPlus />
      </span>
      <span className={styles.wishlist_text}>Wishlist</span>
    </Link>
  );
};

export default WishlistIcon;
