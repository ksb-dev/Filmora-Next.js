/* eslint-disable react/display-name */
"use client";

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
} from "react";
import { useSession } from "next-auth/react";

// lib
import { getWatchlist } from "@/lib/getWatchlist";

// react-icons
import { HiPlus } from "react-icons/hi";

// styles
import styles from "./card.module.css";

type Props = {
  showWatchlistBtn: () => void;
  hideWatchlistBtn: () => void;
  id: string;
  mediaType: string;
};

export default forwardRef<HTMLDivElement, Props>(function WatchlistBtn(
  props,
  ref
) {
  const [watchlist, setwatchlist] = useState([]);
  const buttonRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => buttonRef.current as HTMLDivElement);
  const { data: session } = useSession();

  useEffect(() => {
    session && getWatchlist().then((res) => setwatchlist(res));
  }, []);

  const addWatchlist = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cardId: props.id,
        mediaType: props.mediaType,
        email: session?.user?.email,
      }),
    };

    if (session) {
      const response = await fetch("/api/add_watchlist_api", requestOptions);
      console.log(response);
    } else {
      console.log("Login to add watchlist");
    }
  };

  return (
    <div
      onMouseOver={props.showWatchlistBtn}
      onMouseLeave={props.hideWatchlistBtn}
      ref={buttonRef}
      className={styles.add_btn_container}
      onClick={addWatchlist}
    >
      <p className={styles.add_btn + " rounded-[var(--border-radius-1)]"}>
        <span className={styles.add_btn_icon}>
          <HiPlus />
        </span>
        Watchlist
      </p>
    </div>
  );
});

//export default watchlistBtn;
