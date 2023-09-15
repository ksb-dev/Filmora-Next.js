// components
import Category from "./Category/Category";

const categoryArray = [
  { category: "popular" },
  { category: "trending" },
  { category: "top_rated" },
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
