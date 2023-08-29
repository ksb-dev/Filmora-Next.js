/* eslint-disable react/display-name */
"use client";

import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// react-icons
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

// styles
import styles from "./searchModal.module.css";

const search__movie__url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&adult = false`;

const search__show__url = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&adult = false`;

type Props = {};

const SearchModal = forwardRef<HTMLDivElement, Props>(function (props, ref) {
  const [query, setQuery] = useState("");
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const mode = useSelector((state: RootState) => state.mode.mode);

  useImperativeHandle(ref, () => ref1.current as HTMLDivElement);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (
        ref1.current?.contains(e.target) &&
        !ref2.current?.contains(e.target)
      ) {
        //ref1.current!.style.display = "none";
        // ref1.current!.style.zIndex = "-1";
        // ref1.current!.style.opacity = "0";
        // ref1.current!.style.height = "0";
        ref1.current!.style.transform = "scale(0)";
        setQuery("");
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // const hideModal = () => {
  //   //ref1.current!.style.display = "none";
  //   // ref1.current!.style.zIndex = "-1";
  //   // ref1.current!.style.opacity = "0";
  //   // ref1.current!.style.height = "0";
  //   ref1.current!.style.transform = "scale(0)";
  //   setQuery("");
  // };

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

export default SearchModal;
