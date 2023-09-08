/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export const useOutsideClick = (
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  ref1: any,
  ref2: any,
  setSearchResults: (value: SearchResult[]) => void
) => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        ref1.current?.contains(e.target as Node) &&
        !ref2.current?.contains(e.target as Node)
      ) {
        ref1.current!.style.display = "none";
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
