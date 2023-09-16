/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
"use client";

import React, {
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
import styles from "../card.module.css";

interface Props {
  id: string;
  mediaType: string;
}

const WatchlistBtn: React.FC<Props> = ({ id, mediaType }) => {
  const [watchlist, setwatchlist] = useState<Watchlist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    session && getWatchlist().then((res) => setwatchlist(res));
  }, [session]);

  const addWatchlist = async () => {
    setLoading(true);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cardId: id,
        mediaType: mediaType,
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

  const deleteWatchlist = async () => {
    setLoading(true);

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cardId: id,
        mediaType: mediaType,
        email: session?.user?.email,
      }),
    };

    if (session) {
      const response = await fetch("/api/delete_watchlist_api", requestOptions);

      if (response) {
        getWatchlist().then((res: Watchlist[]) => {
          setwatchlist(res);
          setLoading(false);
        });
        console.log(response);
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
          className={styles.add_btn_container}
          onClick={() => router.push("/pages/login")}
        >
          <p className={styles.add_btn}>
            <span className={styles.add_btn_icon}>
              <HiPlus />
            </span>
          </p>
        </div>
      )}

      {/* ADD-BUTTON */}
      {session && watchlist.length === 0 && (
        <div className={styles.add_btn_container} onClick={addWatchlist}>
          <p className={styles.add_btn}>
            {loading ? (
              <span className={styles.add_btn_icon}>...</span>
            ) : (
              <>
                <span className={styles.add_btn_icon}>
                  <HiPlus />
                </span>
              </>
            )}
          </p>
        </div>
      )}

      {/* ADD-BUTTON */}
      {session &&
        watchlist.length > 0 &&
        watchlist.every((item: any) => item.cardId !== id) && (
          <div className={styles.add_btn_container} onClick={addWatchlist}>
            <p className={styles.add_btn}>
              {loading ? (
                <span className={styles.add_btn_icon}>...</span>
              ) : (
                <>
                  <span className={styles.add_btn_icon}>
                    <HiPlus />
                  </span>
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
          if (item.cardId === id) {
            return (
              <div
                key={index}
                className={styles.add_btn_container}
                onClick={deleteWatchlist}
              >
                <p className={styles.delete_btn}>
                  {loading ? (
                    <span className={styles.delete_btn_icon}>...</span>
                  ) : (
                    <>
                      <span className={styles.delete_btn_icon}>
                        <RiDeleteBin6Line />
                      </span>
                    </>
                  )}
                </p>
              </div>
            );
          }
        })}
    </>
  );
};

export default WatchlistBtn;
