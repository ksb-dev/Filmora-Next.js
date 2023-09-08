// components
import Category from "./Category/Category";

// react-icons
import { BsGraphUpArrow, BsStar } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";

// styles
import styles from "./categories.module.css";

interface Props {
  hideNav: () => void;
}

const categoryArray = [
  { category: "popular", icon: <BsGraphUpArrow /> },
  { category: "trending", icon: <AiOutlineFire /> },
  { category: "top_rated", icon: <BsStar /> },
];

const Categories: React.FC<Props> = ({ hideNav }) => {
  return (
    <div className={styles.categories_container}>
      <p className={styles.categories_heading}>Categories</p>

      {categoryArray.map((el) => (
        <Category
          key={el.category}
          category={el.category}
          hideNav={hideNav}
          icon={el.icon}
        />
      ))}
    </div>
  );
};

export default Categories;
