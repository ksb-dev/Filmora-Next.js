import Link from "next/link";

// react-icons
import { BsBookmarkPlus } from "react-icons/bs";

const WishlistIcon: React.FC = (): JSX.Element => {
  return (
    <Link
      href="#"
      className={
        "ml-[1rem] cursor-pointer flex flex-col items-center justify-center"
      }
    >
      <span className="inline-block mb-[0.25rem]">
        <BsBookmarkPlus />
      </span>
      <span className="text-[0.75rem] font-bold uppercase">Wishlist</span>
    </Link>
  );
};

export default WishlistIcon;
