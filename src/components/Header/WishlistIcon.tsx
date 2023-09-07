import Link from "next/link";

// react-icons
import { BsBookmarkPlus } from "react-icons/bs";
import { BiBookmarkPlus } from "react-icons/bi";

const WishlistIcon: React.FC = (): JSX.Element => {
  return (
    <Link
      href="/pages/wishlist"
      className={
        "md:ml-[2rem] cursor-pointer flex flex-col md:flex-row items-center justify-center"
      }
    >
      <span className="inline-block mr-0 md:mr-[0.25rem] text-[1.25rem]">
        <BiBookmarkPlus />
      </span>
      <span className="text-[0.75rem] font-bold uppercase">Wishlist</span>
    </Link>
  );
};

export default WishlistIcon;
