/* eslint-disable react/display-name */
"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { useSession } from "next-auth/react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// react-icons
import { HiPlus } from "react-icons/hi";

// styles
import styles from "./card.module.css";

type Props = {
  showWishlistBtn: () => void;
  hideWishlistBtn: () => void;
  id: string;
  mediaType: string;
};

export default forwardRef<HTMLDivElement, Props>(function WishlistBtn(
  props,
  ref
) {
  const mode: boolean = useSelector((state: RootState) => state.mode.mode);
  const buttonRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => buttonRef.current as HTMLDivElement);

  const { data: session } = useSession();

  const addWishlist = async () => {
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
      const response = await fetch("/api/add_wishlist_api", requestOptions);
      console.log(response);
    } else {
      console.log("Login to add wishlist");
    }
  };

  return (
    <div
      onMouseOver={props.showWishlistBtn}
      onMouseLeave={props.hideWishlistBtn}
      ref={buttonRef}
      className={styles.add_btn_container}
      onClick={addWishlist}
    >
      <p className={styles.add_btn + " rounded-[var(--border-radius-1)]"}>
        <span className={styles.add_btn_icon}>
          <HiPlus />
        </span>
        Wishlist
      </p>
    </div>
  );
});

//export default WishlistBtn;
