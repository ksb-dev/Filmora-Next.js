"use client";

import { usePathname } from "next/navigation";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// components
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const InnerRootLayout = ({ children }: { children: React.ReactNode }) => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const pathname = usePathname();

  return (
    <div
      className={
        "layout " + (mode ? "whiteBg1 blackColor1" : "blackBg2 whiteColor1")
      }
    >
      <Header />
      <div className="container">
        {pathname !== "/" &&
          pathname !== "/pages/login" &&
          pathname !== "/pages/register" &&
          pathname !== "/pages/about" &&
          !pathname.includes("/movie_info") &&
          !pathname.includes("/show_info") && <Nav />}

        {children}
      </div>
      <Footer />
    </div>
  );
};

export default InnerRootLayout;
