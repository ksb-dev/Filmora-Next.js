import { useRef } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// react-icons
import { AiFillCaretDown } from "react-icons/ai";

// components
import Categories from "./Categories/Categories";

// styles
import styles from "./mediaTypeOption.module.css";

const MediaTypeOption: React.FC<{ option: string }> = ({ option }) => {
  const mode: boolean = useSelector((state: RootState) => state.mode.mode);
  const downIconRef = useRef<HTMLSpanElement>(null);
  const optionsModalRef = useRef<HTMLDivElement>(null);

  const showOptionsModal = () => {
    downIconRef.current!.style.transform = "rotate(180deg)";
    optionsModalRef.current!.style.transform = "scale(1)";
    optionsModalRef.current!.style.opacity = "1";
  };

  const hideOptionsModal = () => {
    downIconRef.current!.style.transform = "rotate(0deg)";
    optionsModalRef.current!.style.transform = "scale(0)";
    optionsModalRef.current!.style.opacity = "0";
  };

  return (
    <div
      onMouseOver={showOptionsModal}
      onMouseLeave={hideOptionsModal}
      className={styles.options_container}
    >
      <div className={styles.option_div}>
        <span className={styles.option_text}>{option}</span>
        <span ref={downIconRef} className={styles.down_icon}>
          <AiFillCaretDown />
        </span>
      </div>

      <div
        ref={optionsModalRef}
        className={styles.options_modal + (mode ? " whiteBg1" : " blackBg1")}
      >
        <Categories hideOptionsModal={hideOptionsModal} option={option} />
      </div>
    </div>
  );
};

export default MediaTypeOption;
