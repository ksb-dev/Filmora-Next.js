/* eslint-disable react/display-name */
"use client";

import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// react-icons
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

// styles
import styles from "./searchModal.module.css";

type Props = {};

const SearchModal = forwardRef<HTMLDivElement, Props>(function (props, ref) {
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
        ref1.current!.style.height = "0%";
        ref1.current!.style.width = "0%";
        ref1.current!.style.zIndex = "-1";
        ref1.current!.style.opacity = "0";
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const hideModal = () => {
    //ref1.current!.style.display = "none";
    ref1.current!.style.height = "0%";
    ref1.current!.style.width = "0%";
    ref1.current!.style.zIndex = "-1";
    ref1.current!.style.opacity = "0";
  };

  return (
    <div
      ref={ref1}
      className={styles.search_modal + (mode ? " lightAlpha" : " darkAlpha")}
    >
      <div className={styles.search_input_div} ref={ref2}>
        <input
          type="text"
          placeholder="Search"
          className={styles.search_input + (mode ? " whiteBg2" : " blackBg1")}
        />
        <span className={styles.search_icon}>
          <BiSearch />
        </span>

        <span className={styles.close_icon} onClick={hideModal}>
          <IoClose />
        </span>
      </div>
    </div>
  );
});

export default SearchModal;
