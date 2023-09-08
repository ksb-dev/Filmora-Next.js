/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
"use client";

import { useState, useRef, forwardRef, useImperativeHandle } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// hooks
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useGetSearchResults } from "@/hooks/useGetSearchResults";

// components
import SearchResults from "./SearchResults/SearchResults";

// react-icons
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

// styles
import styles from "./searchModal.module.css";

type Props = {};

export type Ref = HTMLDivElement;

export default forwardRef<Ref, Props>(function SearchModal(props, ref) {
  const [query, setQuery] = useState("");
  const [mediaType, setMediaType] = useState("movie");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLSpanElement>(null);

  const mode: boolean = useSelector((state: RootState) => state.mode.mode);

  useImperativeHandle(ref, () => ref1.current as HTMLDivElement);

  // Handle outside click
  useOutsideClick(setQuery, ref1, ref2, setSearchResults);
  // Get search results
  useGetSearchResults(query, mediaType, setSearchResults);

  const toggleOption = (value: string) => {
    setQuery("");
    setSearchResults([]);
    value === "movie" ? setMediaType("tv") : setMediaType("movie");

    if (value === "movie") {
      coverRef.current!.style.transform = "translateX(-98px)";
    } else {
      coverRef.current!.style.transform = "translateX(-51.5px)";
    }
  };

  return (
    <div
      ref={ref1}
      className={styles.search_modal + (mode ? " lightAlpha2" : " darkAlpha2")}
    >
      <div
        ref={ref2}
        className={styles.search_container + (mode ? " whiteBg1" : " blackBg1")}
      >
        <div className={styles.search_input_div}>
          <input
            type="text"
            placeholder="Search"
            className={styles.search_input + (mode ? " whiteBg2" : " blackBg2")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className={styles.search_icon}>
            <BiSearch />
          </span>
        </div>

        <span
          className={styles.close_icon}
          onClick={() => {
            setQuery("");
            setSearchResults([]);
            ref1.current!.style.display = "none";
          }}
        >
          <IoClose />
        </span>

        <div className={styles.search_options}>
          <span
            className={styles.search_option}
            onClick={() => toggleOption("movie")}
          >
            Movie
          </span>
          <span
            className={styles.search_option}
            onClick={() => toggleOption("tv")}
          >
            Tv
          </span>
          <span ref={coverRef} className={styles.cover}>
            cover
          </span>
        </div>

        <div className="mt-[1rem]">
          <p>
            {searchResults.length ? (
              <>
                <span>Search results for </span>
                <span className="font-bold">{query}</span>
                <SearchResults
                  searchResults={searchResults}
                  mediaType={mediaType}
                  ref1={ref1}
                  setQuery={setQuery}
                  setSearchResults={setSearchResults}
                />
              </>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
});
