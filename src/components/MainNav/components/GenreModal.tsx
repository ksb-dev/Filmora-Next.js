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

// styles
import styles from "../mainNav.module.css";

interface Props {
  mode: boolean;
  genres: Genres[];
  genreOptionRef: RefObject<HTMLDivElement>;
  showOptionsModal: () => void;
  hideOptionsModal: () => void;
  setHoverState: Dispatch<SetStateAction<boolean>>;
}

type Ref = HTMLDivElement;

export default forwardRef<Ref, Props>(function GenreModal(props, ref) {
  const mode: boolean = useSelector((state: RootState) => state.mode.mode);
  const genreModalRef = useRef<HTMLDivElement>(null);
  const {
    genres,
    genreOptionRef,
    showOptionsModal,
    hideOptionsModal,
    setHoverState,
  } = props;

  useImperativeHandle(ref, () => genreModalRef.current as HTMLDivElement);
  return (
    <div
      ref={genreModalRef}
      onMouseOver={() => {
        showOptionsModal();
        setHoverState(true);
      }}
      onMouseLeave={() => {
        !genreModalRef.current!.onmouseover &&
          !genreOptionRef.current!.onmouseover &&
          hideOptionsModal();

        !genreModalRef.current!.onmouseover &&
          !genreOptionRef.current!.onmouseover &&
          setHoverState(false);
      }}
      className={styles.genres_modal + (mode ? " whiteBg2" : " blackBg2")}
    >
      <div className={styles.genres_modal_inner}>
        {genres.map((genre) => (
          <span
            key={genre.id}
            className={styles.genre + (mode ? " whiteBg2" : " blackBg2")}
          >
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
});
