/* eslint-disable react/display-name */
"use client";

import { forwardRef } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// styles
import styles from "./searchModal.module.css";

type Props = {};

const SearchModal = forwardRef<HTMLDivElement, Props>(function (props, ref) {
  const mode = useSelector((state: RootState) => state.mode.mode);

  return (
    <div
      ref={ref}
      className={styles.search_modal + (mode ? " lightAlpha" : " darkAlpha")}
    >
      <div className={styles.search_container}>Search Modal</div>
    </div>
  );
});

export default SearchModal;
