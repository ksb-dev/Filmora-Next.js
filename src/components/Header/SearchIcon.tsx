"use client";

import { useRef } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// react-icons
import { ImSearch } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";

// components
import SearchModal from "../SearchModal/SearchModal";

// styles
import styles from "./header.module.css";

const SearchIcon: React.FC = (): JSX.Element => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const buttonRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  const showModal = () => {
    ref.current!.style.transform = "scale(1)";
    ref.current!.style.opacity = "1";
  };

  return (
    <>
      <p ref={buttonRef} onClick={showModal} className={styles.search}>
        <span className={styles.search_icon}>
          <ImSearch />
        </span>
        <span className={styles.search_text}>Search</span>
      </p>

      <SearchModal ref={ref} />
    </>
  );
};

export default SearchIcon;
