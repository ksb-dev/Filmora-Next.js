import Link from "next/link";
import { usePathname } from "next/navigation";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// styles
import styles from "./category.module.css";

interface Category {
  category: string;
  option: string;
  hideOptionsModal: () => void;
}

const Category: React.FC<Category> = ({
  category,
  option,
  hideOptionsModal,
}) => {
  const mode: boolean = useSelector((state: RootState) => state.mode.mode);
  const pathname = usePathname();
  return (
    <Link
      href={
        option === "movies"
          ? `/pages/movies/${category}/1`
          : `/pages/tv/${category}/1`
      }
      className={
        styles.category +
        (mode ? " whiteBg1 blackColor1" : " blackBg1 whiteColor1")
      }
      onClick={hideOptionsModal}
    >
      {/* <span className={styles.category_icon}>{icon}</span> */}
      {category === "top_rated"
        ? "Top Rated"
        : category.charAt(0).toUpperCase() + category.substring(1)}
    </Link>
  );
};

export default Category;
