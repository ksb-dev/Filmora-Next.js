"use client";

import { useEffect, useRef } from "react";

import { usePathname } from "next/navigation";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// components
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

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
  const navInnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        navRef.current?.contains(e.target as Node) &&
        !navInnerRef.current?.contains(e.target as Node)
      ) {
        navRef.current!.style.transform = "translateX(-100%)";
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navRef]);

  const getPathnames = (): boolean => {
    return pathname !== "/" &&
      pathname !== "/pages/login" &&
      pathname !== "/pages/register" &&
      pathname !== "/pages/about" &&
      pathname !== "/pages/wishlist" &&
      pathname !== "/pages/account" &&
      !pathname.includes(`movie_detail`) &&
      !pathname.includes(`tv_detail`)
      ? true
      : false;
  };

  return (
    <div
      className={
        "layout " + (mode ? "whiteBg1 blackColor1" : "blackBg1 whiteColor1")
      }
    >
      <Header forwardedRef={navRef} />

      <div className="container">
        {getPathnames() && (
          <div className="w-[200px] hidden md:flex">
            <Nav />
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
            ref={navInnerRef}
            className={
              "min-w-[250px] min-h-[100vh] p-[2rem] " +
              (mode ? " whiteBg1" : " blackBg1")
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
