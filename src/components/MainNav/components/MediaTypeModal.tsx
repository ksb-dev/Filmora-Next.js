import {
  Dispatch,
  RefObject,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// components
import Category from "./Category";

// styles
import styles from "../mainNav.module.css";

interface Props {
  mediaTypeOptionRef: RefObject<HTMLDivElement>;
  showOptionsModal: () => void;
  hideOptionsModal: () => void;
  setHoverState: Dispatch<SetStateAction<boolean>>;
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
  const {
    mediaTypeOptionRef,
    showOptionsModal,
    hideOptionsModal,
    setHoverState,
    option,
  } = props;

  useImperativeHandle(ref, () => mediaTypeModalRef.current as HTMLDivElement);

  return (
    <div
      ref={mediaTypeModalRef}
      onMouseOver={() => {
        showOptionsModal();
        setHoverState(true);
      }}
      onMouseLeave={() => {
        !mediaTypeModalRef.current!.onmouseover &&
          !mediaTypeOptionRef.current!.onmouseover &&
          hideOptionsModal();

        !mediaTypeModalRef.current!.onmouseover &&
          !mediaTypeOptionRef.current!.onmouseover &&
          setHoverState(false);
      }}
      className={styles.media_type_modal + (mode ? " whiteBg2" : " blackBg2")}
    >
      {categoryArray.map((el) => (
        <Category
          key={el.category}
          category={el.category}
          option={option}
          hideOptionsModal={hideOptionsModal}
        />
      ))}
    </div>
  );
});
