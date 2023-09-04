"use client";

import { useRef } from "react";

import { usePathname } from "next/navigation";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// components
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import Footer from "./Footer";

interface Children {
  children: React.ReactNode;
}

const InnerRootLayout: React.FC<Children> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const pathname = usePathname();
  const id = pathname.split("/")[5];
  const navRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={
        "layout " + (mode ? "whiteBg1 blackColor1" : "blackBg2 whiteColor1")
      }
    >
      <Header forwardedRef={navRef} />

      <div className="container">
        {pathname !== "/" &&
          pathname !== "/pages/login" &&
          pathname !== "/pages/register" &&
          pathname !== "/pages/about" &&
          !pathname.includes(`${id}`) && (
            <div className="w-[200px] hidden md:flex">
              <Nav forwardedRef={navRef} />
            </div>
          )}

        <div
          className={
            "nav w-[100vw] flex md:hidden fixed top-0 left-0 z-[2] " +
            (mode ? "lightAlpha2" : "darkAlpha2")
          }
          ref={navRef}
        >
          <div
            className={
              "min-h-[100vh] p-[2rem] " + (mode ? "whiteBg1" : "darkBg1")
            }
          >
            <Nav forwardedRef={navRef} />
          </div>
        </div>

        {children}
      </div>
      <Footer />
    </div>
  );
};

export default InnerRootLayout;
