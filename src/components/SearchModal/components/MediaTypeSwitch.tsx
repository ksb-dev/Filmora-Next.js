import { Dispatch, SetStateAction, useRef } from "react";

// styles
import styles from "../searchModal.module.css";

interface Props {
  setQuery: Dispatch<SetStateAction<string>>;
  setSearchResults: Dispatch<SetStateAction<SearchResult[]>>;
  setMediaType: Dispatch<SetStateAction<string>>;
  mediaType: string;
  mode: boolean;
}

const MediaTypeSwitch: React.FC<Props> = ({
  setQuery,
  setSearchResults,
  setMediaType,
  mediaType,
  mode,
}) => {
  const coverRef = useRef<HTMLSpanElement>(null);

  const toggleOption = (value: string) => {
    setQuery("");
    setSearchResults([]);
    value === "movie" ? setMediaType("tv") : setMediaType("movie");

    if (value === "movie") {
      coverRef.current!.style.transform = "translateX(-95.5px)";
    } else {
      coverRef.current!.style.transform = "translateX(-52.5px)";
    }
  };
  return (
    <div
      className={
        styles.search_options +
        (mode ? " blackBg1 whiteColor1" : " whiteBg2 blackColor1")
      }
    >
      <span
        className={styles.search_option}
        onClick={() => toggleOption("movie")}
      >
        Movie
      </span>
      <span className={styles.search_option} onClick={() => toggleOption("tv")}>
        Tv
      </span>
      <span
        ref={coverRef}
        className={styles.cover + (mode ? " whiteBg2" : " blackBg1")}
        onClick={() => toggleOption(mediaType === "movie" ? "movie" : "tv")}
      >
        cover
      </span>
    </div>
  );
};

export default MediaTypeSwitch;
