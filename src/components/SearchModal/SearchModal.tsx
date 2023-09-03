/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
"use client";

import { useState, useRef, forwardRef, useImperativeHandle } from "react";

import { usePathname } from "next/navigation";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// lib
import { getSearchResults } from "@/lib/getSearchResults";

// react-icons
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

// hooks
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useGetSearchResults } from "@/hooks/useGetSearchResults";

// styles
import styles from "./searchModal.module.css";

type Props = {};

export type Ref = HTMLDivElement;

export default forwardRef<Ref, Props>(function SearchModal(props, ref) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const mode = useSelector((state: RootState) => state.mode.mode);

  useImperativeHandle(ref, () => ref1.current as HTMLDivElement);

  // Handle outside click
  useOutsideClick(setQuery, ref1, ref2);
  // Get search results
  useGetSearchResults(query, pathname, setSearchResults);

  return (
    <div
      ref={ref1}
      className={styles.search_modal + (mode ? " lightAlpha2" : " darkAlpha1")}
    >
      <div
        ref={ref2}
        className={styles.search_container + (mode ? " whiteBg1" : " blackBg2")}
      >
        <div className={styles.search_input_div}>
          <input
            type="text"
            placeholder="Search"
            className={styles.search_input + (mode ? " whiteBg2" : " blackBg1")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className={styles.search_icon}>
            <BiSearch />
          </span>

          <span className={styles.close_icon}>
            <IoClose />
          </span>
        </div>
      </div>
    </div>
  );
});