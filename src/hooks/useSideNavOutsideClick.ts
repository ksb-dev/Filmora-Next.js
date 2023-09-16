/* eslint-disable react-hooks/exhaustive-deps */
import { MutableRefObject, useEffect } from "react";

export const useSideNavOutsideClick = (
  sideNavRef: MutableRefObject<HTMLDivElement | null>,
  sideNavInnerRef: MutableRefObject<HTMLDivElement | null>
): void => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        sideNavRef.current?.contains(e.target as Node) &&
        !sideNavInnerRef.current?.contains(e.target as Node)
      ) {
        sideNavRef.current!.style.transform = "translateX(-100%)";
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [sideNavRef]);
};
