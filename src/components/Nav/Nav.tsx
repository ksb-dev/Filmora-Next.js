"use client";

import { RefObject } from "react";

// components
import Options from "./Options/Options";
import Categories from "./Categories/Categories";

interface NavProp {
  forwardedRef?: RefObject<HTMLDivElement>;
}

const Nav: React.FC<NavProp> = ({ forwardedRef }) => {
  const hideNav = () => {
    if (forwardedRef && forwardedRef.current) {
      forwardedRef.current!.style.transform = "translateX(-100%)";
    }
  };

  return (
    <div>
      <Options hideNav={hideNav} />
      <Categories hideNav={hideNav} />
    </div>
  );
};

export default Nav;
