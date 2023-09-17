"use client";

import { useRef } from "react";

// react-icons
import { ImSearch } from "react-icons/im";

// components
import SearchModal from "@/components/SearchModal/SearchModal";

// styles
import styles from "../header.module.css";

const SearchIcon: React.FC = (): JSX.Element => {
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
