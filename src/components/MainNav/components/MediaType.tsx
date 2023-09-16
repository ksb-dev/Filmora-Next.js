import { useRef } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// react-icons
import { AiFillCaretDown } from "react-icons/ai";

// components
import MediaTypeModal from "./MediaTypeModal";

// styles
import styles from "../mainNav.module.css";

const MediaType: React.FC<{ option: string }> = ({ option }) => {
  const mode: boolean = useSelector((state: RootState) => state.mode.mode);
  const downIconRef = useRef<HTMLSpanElement>(null);
  const mediaTypeModalRef = useRef<HTMLDivElement>(null);

  const showOptionsModal = () => {
    downIconRef.current!.style.transform = "rotate(180deg)";
    mediaTypeModalRef.current!.style.transform = "scale(1)";
    mediaTypeModalRef.current!.style.opacity = "1";
  };

  const hideOptionsModal = () => {
    downIconRef.current!.style.transform = "rotate(0deg)";
    mediaTypeModalRef.current!.style.transform = "scale(0)";
    mediaTypeModalRef.current!.style.opacity = "0";
  };

  return (
    <div
      onMouseOver={showOptionsModal}
      onMouseLeave={hideOptionsModal}
      className={styles.media_type_container}
    >
      <div className={styles.media_type_div}>
        <span className={styles.media_type_text}>{option}</span>
        <span ref={downIconRef} className={styles.down_icon}>
          <AiFillCaretDown />
        </span>
      </div>

      <MediaTypeModal
        ref={mediaTypeModalRef}
        hideOptionsModal={hideOptionsModal}
        option={option}
      />
    </div>
  );
};

export default MediaType;
