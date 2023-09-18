import { useRef, useState } from "react";

// react-icons
import { AiFillCaretDown } from "react-icons/ai";

// components
import GenreModal from "./GenreModal";

// styles
import styles from "../mainNav.module.css";

const GenreOption: React.FC<{ mode: boolean }> = ({ mode }) => {
  const downIconRef = useRef<HTMLSpanElement>(null);
  const genreOptionRef = useRef<HTMLDivElement>(null);
  const genreModalRef = useRef<HTMLDivElement>(null);

  const [hoverState, setHoverState] = useState<boolean>(false);

  const showOptionsModal = () => {
    downIconRef.current!.style.transform = "rotate(180deg)";
    genreModalRef.current!.style.transform = "scale(1)";
  };

  const hideOptionsModal = () => {
    downIconRef.current!.style.transform = "rotate(0deg)";
    genreModalRef.current!.style.transform = "scale(0)";
  };

  return (
    <div className={styles.genres_container}>
      <div
        ref={genreOptionRef}
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
          !genreModalRef.current!.onmouseover &&
            !genreOptionRef.current!.onmouseover &&
            hideOptionsModal();

          !genreModalRef.current!.onmouseover &&
            !genreOptionRef.current!.onmouseover &&
            setHoverState(false);
        }}
        className={styles.genres_div + (mode ? " whiteBg1" : " blackBg1")}
      >
        <span className={styles.genres_text}>Genres</span>
        <span ref={downIconRef} className={styles.down_icon}>
          <AiFillCaretDown />
        </span>
      </div>

      <GenreModal
        genreOptionRef={genreOptionRef}
        ref={genreModalRef}
        showOptionsModal={showOptionsModal}
        hideOptionsModal={hideOptionsModal}
        setHoverState={setHoverState}
      />
    </div>
  );
};

export default GenreOption;
