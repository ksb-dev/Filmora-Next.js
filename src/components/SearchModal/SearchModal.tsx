/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
"use client";

import { useState, useRef, forwardRef, useImperativeHandle } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// hooks
import { useSearchModalOutsideClick } from "@/hooks/useSearchModalOutsideClick";
import { useGetSearchResults } from "@/hooks/useGetSearchResults";

// components
import SearchResults from "./components/SearchResults";
import MediaTypeSwitch from "./components/MediaTypeSwitch";

// react-icons
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

// styles
import styles from "./searchModal.module.css";

type Props = {};

export type Ref = HTMLDivElement;

export default forwardRef<Ref, Props>(function SearchModal(props, ref) {
  const [query, setQuery] = useState<string>("");
  const [mediaType, setMediaType] = useState<string>("movie");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const mode: boolean = useSelector((state: RootState) => state.mode.mode);

  useImperativeHandle(ref, () => ref1.current as HTMLDivElement);

  // Handle outside click
  useSearchModalOutsideClick(setQuery, ref1, ref2, setSearchResults);
  // Get search results
  useGetSearchResults(query, mediaType, setSearchResults);

  return (
    <div
      ref={ref1}
      className={styles.search_modal + (mode ? " lightAlpha2" : " darkAlpha1")}
    >
      <div
        ref={ref2}
        className={
          styles.search_container +
          (mode ? " whiteBg2 blackColor1" : " blackBg2 whiteColor1")
        }
      >
        <div className={styles.search_input_div}>
          <input
            type="text"
            placeholder={`Search ${
              mediaType.charAt(0).toUpperCase() + mediaType.substring(1)
            }`}
            className={styles.search_input + (mode ? " whiteBg1" : " blackBg1")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className={styles.search_icon}>
            <BiSearch />
          </span>
        </div>

        <span
          className={
            styles.close_icon +
            (mode ? " blackBg1 whiteColor1" : " whiteBg2 blackColor1")
          }
          onClick={() => {
            setQuery("");
            setSearchResults([]);
            ref1.current!.style.transform = "scale(0)";
            ref1.current!.style.opacity = "0";
          }}
        >
          <IoClose />
        </span>

        <MediaTypeSwitch
          setQuery={setQuery}
          setSearchResults={setSearchResults}
          setMediaType={setMediaType}
          mediaType={mediaType}
          mode={mode}
        />

        <div className="mt-[1rem]">
          <p>
            {query && (
              <>
                <span>Search results for </span>
                <span className="font-bold">{query}</span>
              </>
            )}
            {searchResults.length ? (
              <SearchResults
                searchResults={searchResults}
                mediaType={mediaType}
                ref1={ref1}
                setQuery={setQuery}
                setSearchResults={setSearchResults}
              />
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
});
