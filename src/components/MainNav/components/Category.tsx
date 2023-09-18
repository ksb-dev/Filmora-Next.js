import Link from "next/link";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// styles
import styles from "../mainNav.module.css";

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
  return (
    <Link
      href={
        option === "movies"
          ? `/pages/movies/${category}/1`
          : `/pages/tv/${category}/1`
      }
      className={styles.category + (mode ? " whiteBg2" : " blackBg2")}
      onClick={hideOptionsModal}
    >
      {category === "top_rated"
        ? "Top Rated"
        : category.charAt(0).toUpperCase() + category.substring(1)}
    </Link>
  );
};

export default Category;
