import { useRef, useState } from "react";

// react-icons
import { AiFillCaretDown } from "react-icons/ai";

// components
import MediaTypeModal from "./MediaTypeModal";

// styles
import styles from "../mainNav.module.css";

const MediaType: React.FC<{ option: string; mode: boolean }> = ({
  option,
  mode,
}) => {
  const downIconRef = useRef<HTMLSpanElement>(null);
  const mediaTypeRef = useRef<HTMLDivElement>(null);
  const mediaTypeModalRef = useRef<HTMLDivElement>(null);

  const [hoverState, setHoverState] = useState<boolean>(false);

  const showOptionsModal = () => {
    downIconRef.current!.style.transform = "rotate(180deg)";
    mediaTypeModalRef.current!.style.transform = "scale(1)";
  };

  const hideOptionsModal = () => {
    downIconRef.current!.style.transform = "rotate(0deg)";
    mediaTypeModalRef.current!.style.transform = "scale(0)";
  };

  return (
    <div className={styles.media_type_container}>
      <div
        ref={mediaTypeRef}
        onClick={() => {
          !hoverState && setHoverState(true);
          !hoverState && showOptionsModal();
          hoverState && setHoverState(false);
          hoverState && hideOptionsModal();
        }}
        onMouseOver={() => {
          hoverState && showOptionsModal();
          hoverState && setHoverState(true);
        }}
        onMouseLeave={() => {
          !mediaTypeModalRef.current!.onmouseover &&
            !mediaTypeRef.current!.onmouseover &&
            hideOptionsModal();

          !mediaTypeModalRef.current!.onmouseover &&
            !mediaTypeRef.current!.onmouseover &&
            setHoverState(false);
        }}
        className={styles.media_type_div + (mode ? " whiteBg1" : " blackBg1")}
      >
        <span className={styles.media_type_text}>{option}</span>
        <span ref={downIconRef} className={styles.down_icon}>
          <AiFillCaretDown />
        </span>
      </div>

      <MediaTypeModal
        mediaTypeRef={mediaTypeRef}
        ref={mediaTypeModalRef}
        showOptionsModal={showOptionsModal}
        hideOptionsModal={hideOptionsModal}
        setHoverState={setHoverState}
        option={option}
      />
    </div>
  );
};

export default MediaType;
