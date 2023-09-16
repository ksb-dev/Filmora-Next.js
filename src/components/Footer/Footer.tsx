"use client";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// styles
import styles from "./footer.module.css";

const Footer = () => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  return (
    <div
      className={
        styles.footer +
        (mode ? " whiteBg1 blackColor1" : " blackBg1 whiteColor1")
      }
    >
      <div className={styles.footer_content}>Footer</div>
    </div>
  );
};

export default Footer;
