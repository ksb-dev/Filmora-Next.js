"use client";

import { useRef } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// styles
import styles from "./search.module.css";

// react-icons
import { BiSearch } from "react-icons/bi";
import SearchModal from "../SearchModal/SearchModal";

export default function Search() {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const buttonRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  const showModal = () => {
    ref.current!.style.transform = "scale(1)";
  };

  return (
    <>
      <div>
        <div
          ref={buttonRef}
          className={styles.search + (mode ? " whiteBg2" : " blackBg1")}
          onClick={showModal}
        >
          <span className={styles.search_icon_1}>
            <BiSearch />
          </span>
          Search
        </div>
      </div>
      <span
        ref={buttonRef}
        className={styles.search_icon_2}
        onClick={showModal}
      >
        <BiSearch />
      </span>
      <SearchModal ref={ref} />
    </>
  );
}
