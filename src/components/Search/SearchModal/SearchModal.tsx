/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
"use client";

import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

import { usePathname } from "next/navigation";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// lib
import { getSearchResults } from "@/lib/getSearchResults";

// react-icons
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

// styles
import styles from "./searchModal.module.css";

type Props = {};

export default forwardRef<HTMLDivElement, Props>(function SearchModal(
  props,
  ref
) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  console.log(searchResults);

  const mode = useSelector((state: RootState) => state.mode.mode);

  useImperativeHandle(ref, () => ref1.current as HTMLDivElement);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (
        ref1.current?.contains(e.target) &&
        !ref2.current?.contains(e.target)
      ) {
        ref1.current!.style.transform = "scale(0)";
        setQuery("");
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (pathname.includes("movies") && query.length) {
      getSearchResults("movie", query)
        .then((res) => res.results)
        .then((data) => setSearchResults(data));
    } else {
      getSearchResults("tv", query)
        .then((res) => res.results)
        .then((data) => setSearchResults(data));
    }
  }, [query]);

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

          <span
            className={styles.close_icon}
            //onClick={hideModal}
          >
            <IoClose />
          </span>
        </div>
      </div>
    </div>
  );
});
