"use client";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Footer = () => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  return (
    <div
      className={
        "footer " + (mode ? "whiteBg2 blackColor1" : "blackBg1 whiteColor1")
      }
    >
      <div className="footer_content">Footer</div>
    </div>
  );
};

export default Footer;
