/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect } from "react";

// lib
import { getSearchResults } from "@/lib/getSearchResults";

export const useGetSearchResults = (
  query: string,
  mediaType: string,
  setSearchResults: Dispatch<SetStateAction<SearchResult[]>>
) => {
  useEffect(() => {
    if (query.length) {
      getSearchResults(mediaType, query)
        .then((res) => res.results)
        .then((data) => setSearchResults(data));
    }
  }, [query]);
};
