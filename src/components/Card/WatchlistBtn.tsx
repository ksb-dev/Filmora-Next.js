/* eslint-disable react-hooks/exhaustive-deps */
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
import { useRouter } from "next/navigation";

// lib
import { getWatchlist } from "@/lib/getWatchlist";

// react-icons
import { HiPlus } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";

// styles
import styles from "./card.module.css";
import Loading from "@/app/pages/watchlist/[mediaType]/loading";

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
  const [watchlist, setwatchlist] = useState<Watchlist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => buttonRef.current as HTMLDivElement);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {}, [watchlist]);

  useEffect(() => {
    session && getWatchlist().then((res) => setwatchlist(res));
  }, []);

  useEffect(() => {
    session && getWatchlist().then((res) => setwatchlist(res));
  }, [session]);

  const addWatchlist = async () => {
    setLoading(true);

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

      if (response) {
        getWatchlist().then((res: Watchlist[]) => {
          setwatchlist(res);
          setLoading(false);
        });
      }
    } else {
      setLoading(false);
      console.log("Login to add watchlist");
    }
  };

  return (
    <>
      {!session && (
        <div
          onMouseOver={props.showWatchlistBtn}
          onMouseLeave={props.hideWatchlistBtn}
          ref={buttonRef}
          className={styles.add_btn_container}
          onClick={() => router.push("/pages/login")}
        >
          <p className={styles.add_btn + " rounded-[var(--border-radius-1)]"}>
            <span className={styles.add_btn_icon}>
              <HiPlus />
            </span>
            Watchlist
          </p>
        </div>
      )}

      {/* ADD-BUTTON */}
      {session && watchlist.length === 0 && (
        <div
          onMouseOver={props.showWatchlistBtn}
          onMouseLeave={props.hideWatchlistBtn}
          ref={buttonRef}
          className={styles.add_btn_container}
          onClick={addWatchlist}
        >
          <p className={styles.add_btn + " rounded-[var(--border-radius-1)]"}>
            {loading ? (
              "Loading..."
            ) : (
              <>
                <span className={styles.add_btn_icon}>
                  <HiPlus />
                </span>
                Watchlist
              </>
            )}
          </p>
        </div>
      )}

      {/* ADD-BUTTON */}
      {session &&
        watchlist.length > 0 &&
        watchlist.every((item: any, index) => item.cardId !== props.id) && (
          <div
            onMouseOver={props.showWatchlistBtn}
            onMouseLeave={props.hideWatchlistBtn}
            ref={buttonRef}
            className={styles.add_btn_container}
            onClick={addWatchlist}
          >
            <p className={styles.add_btn + " rounded-[var(--border-radius-1)]"}>
              {loading ? (
                "Loading..."
              ) : (
                <>
                  <span className={styles.add_btn_icon}>
                    <HiPlus />
                  </span>
                  Watchlist
                </>
              )}
            </p>
          </div>
        )}

      {/* DELETE-BUTTON */}
      {session &&
        watchlist &&
        watchlist.length > 0 &&
        watchlist.map((item: any, index) => {
          if (item.cardId === props.id) {
            return (
              <div
                key={index}
                onMouseOver={props.showWatchlistBtn}
                onMouseLeave={props.hideWatchlistBtn}
                ref={buttonRef}
                className={styles.add_btn_container}
                //onClick={addWatchlist}
              >
                <p
                  className={
                    styles.add_btn + " rounded-[var(--border-radius-1)]"
                  }
                >
                  <span className={styles.add_btn_icon}>
                    <RiDeleteBin6Line />
                  </span>
                  Watchlist
                </p>
              </div>
            );
          }
        })}
    </>
  );
});
