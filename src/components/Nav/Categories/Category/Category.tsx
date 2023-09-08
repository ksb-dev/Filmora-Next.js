import Link from "next/link";
import { usePathname } from "next/navigation";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// styles
import styles from "./category.module.css";

interface Category {
  category: string;
  icon: React.ReactNode;
  hideNav: () => void;
}

const Category: React.FC<Category> = ({ category, hideNav, icon }) => {
  const mode: boolean = useSelector((state: RootState) => state.mode.mode);
  const pathname = usePathname();
  return (
    <Link
      href={
        pathname.includes("movies")
          ? `/pages/movies/${category}/1`
          : `/pages/tv/${category}/1`
      }
      className={styles.category + (mode ? " blackColor1" : " whiteColor1")}
      onClick={hideNav}
    >
      <span className={styles.category_icon}>{icon}</span>
      {category === "top_rated"
        ? "Top Rated"
        : category.charAt(0).toUpperCase() + category.substring(1)}
    </Link>
  );
};

export default Category;
