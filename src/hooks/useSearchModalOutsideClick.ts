/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export const useSearchModalOutsideClick = (
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  ref1: any,
  ref2: any,
  setSearchResults: (value: SearchResult[]) => void
): void => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        ref1.current?.contains(e.target as Node) &&
        !ref2.current?.contains(e.target as Node)
      ) {
        ref1.current!.style.transform = "scale(0)";
        ref1.current!.style.opacity = "0";
        setQuery("");
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
};
