/* eslint-disable react/display-name */
"use client";

import { useEffect, useRef, forwardRef } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// styles
import styles from "./searchModal.module.css";

type Props = {};

const SearchModal = forwardRef<HTMLDivElement, Props>(function (props, ref) {
  const ref1 = useRef<HTMLDivElement>(null);
  const mode = useSelector((state: RootState) => state.mode.mode);

  useEffect(() => {
    //ref1.current!.style.transform = "scale(1)";
  }, []);

  return (
    <div
      ref={ref}
      className={styles.search_modal + (mode ? " lightAlpha" : " darkAlpha")}
    >
      <div ref={ref1} className={styles.search_container}>
        Search Modal
      </div>
    </div>
  );
});

export default SearchModal;
