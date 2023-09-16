import { forwardRef, useImperativeHandle, useRef } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// components
import Category from "./Category";

// styles
import styles from "../mainNav.module.css";

interface Props {
  hideOptionsModal: () => void;
  option: string;
}

type Ref = HTMLDivElement;

const categoryArray = [
  { category: "popular" },
  { category: "trending" },
  { category: "top_rated" },
];

export default forwardRef<Ref, Props>(function MediaTypeModal(props, ref) {
  const mode: boolean = useSelector((state: RootState) => state.mode.mode);
  const mediaTypeModalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => mediaTypeModalRef.current as HTMLDivElement);

  return (
    <div
      ref={mediaTypeModalRef}
      className={
        styles.media_type_modal +
        (mode ? " whiteBg1 blackColor1" : " blackBg1 whiteColor1")
      }
    >
      {categoryArray.map((el) => (
        <Category
          key={el.category}
          category={el.category}
          option={props.option}
          hideOptionsModal={props.hideOptionsModal}
        />
      ))}
    </div>
  );
});
