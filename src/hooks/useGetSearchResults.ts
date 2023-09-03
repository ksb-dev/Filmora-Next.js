/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect } from "react";

// lib
import { getSearchResults } from "@/lib/getSearchResults";

export const useGetSearchResults = (
  query: string,
  pathname: string,
  setSearchResults: Dispatch<SetStateAction<SearchResult[]>>
) => {
  useEffect(() => {
    if (pathname.includes("movies") && query.length) {
      getSearchResults("movie", query)
        .then((res) => res.results)
        .then((data) => setSearchResults(data));
    } else {
      getSearchResults("tv", query)
        .then((res) => res.results)
        .then((data) => setSearchResults(data));
    }
  }, [query]);
};
