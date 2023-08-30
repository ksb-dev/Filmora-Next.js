/* eslint-disable react/display-name */
"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

// react-icons
import { HiPlus } from "react-icons/hi";

// styles
import styles from "./card.module.css";

type Props = {
  showWishlistBtn: () => void;
  hideWishlistBtn: () => void;
};

export default forwardRef<HTMLDivElement, Props>(function WishlistBtn(
  props,
  ref
) {
  const buttonRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => buttonRef.current as HTMLDivElement);

  return (
    <div
      onMouseOver={props.showWishlistBtn}
      onMouseLeave={props.hideWishlistBtn}
      ref={buttonRef}
      className={styles.add_btn_container}
    >
      <p className={styles.add_btn}>
        <span className={styles.add_btn_icon}>
          <HiPlus />
        </span>
        Wishlist
      </p>
    </div>
  );
});

//export default WishlistBtn;
