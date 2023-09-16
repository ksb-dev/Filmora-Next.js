"use client";

import { useRef } from "react";

import { usePathname } from "next/navigation";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// hooks
import { useSideNavOutsideClick } from "@/hooks/useSideNavOutsideClick";
import { useShowMainNav } from "@/hooks/useShowMainNav";

// components
import Header from "@/components/Header/Header";
import MainNav from "@/components/MainNav/MainNav";
import Footer from "@/components/Footer/Footer";
import SmallHeader from "@/components/SmallHeader/SmallHeader";

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
  const sideNavRef = useRef<HTMLDivElement | null>(null);
  const sideNavInnerRef = useRef<HTMLDivElement | null>(null);

  useSideNavOutsideClick(sideNavRef, sideNavInnerRef);

  return (
    <div
      className={
        "layout " + (mode ? "whiteBg2 blackColor1" : "blackBg2 whiteColor1")
      }
    >
      <Header forwardedRef={sideNavRef} />
      <SmallHeader />
      {useShowMainNav(pathname) && <MainNav />}
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default InnerRootLayout;
