"use client";

import { useRef } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// react-icons
import { ImSearch } from "react-icons/im";
import SearchModal from "../../SearchModal/SearchModal";

// styles
import styles from "./searchIcon.module.css";

const SearchIcon: React.FC = (): JSX.Element => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const buttonRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  const showModal = () => {
    ref.current!.style.display = "flex";
  };

  return (
    <>
      <div
        ref={buttonRef}
        onClick={showModal}
        className={styles.search_1 + (mode ? " whiteBg2" : " blackBg2")}
      >
        <span className={styles.search_icon_1}>
          <ImSearch />
        </span>
        Search
      </div>

      <p ref={buttonRef} onClick={showModal} className={styles.search_2}>
        <span className={styles.search_icon_2}>
          <ImSearch />
        </span>
        <span className={styles.search_text_2}>Search</span>
      </p>

      <SearchModal ref={ref} />
    </>
  );
};

export default SearchIcon;
