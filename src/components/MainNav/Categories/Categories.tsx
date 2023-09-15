// components
import Category from "./Category/Category";

// react-icons
import { BsGraphUpArrow, BsStar, BsFire, BsStarFill } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";

// styles
import styles from "./categories.module.css";

const categoryArray = [
  { category: "popular", icon: <BsGraphUpArrow /> },
  { category: "trending", icon: <BsFire /> },
  { category: "top_rated", icon: <BsStarFill /> },
];

interface Props {
  hideOptionsModal: () => void;
  option: string;
}

const Categories: React.FC<Props> = ({ hideOptionsModal, option }) => {
  return (
    <>
      {categoryArray.map((el) => (
        <Category
          key={el.category}
          category={el.category}
          option={option}
          hideOptionsModal={hideOptionsModal}
        />
      ))}
    </>
  );
};

export default Categories;
