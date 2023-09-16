// components
import { RefObject } from "react";
import Result from "./Result";

// styles
import styles from "../searchModal.module.css";

interface Props {
  searchResults: SearchResult[];
  mediaType: string;
  ref1: RefObject<HTMLDivElement>;
  setQuery: (value: string) => void;
  setSearchResults: (value: SearchResult[]) => void;
}

const SearchResults: React.FC<Props> = ({
  searchResults,
  mediaType,
  ref1,
  setQuery,
  setSearchResults,
}) => {
  return (
    <div className={styles.search_results}>
      {searchResults.map((result, index) => (
        <Result
          key={index}
          result={result}
          mediaType={mediaType}
          ref1={ref1}
          setQuery={setQuery}
          setSearchResults={setSearchResults}
        />
      ))}
    </div>
  );
};

export default SearchResults;
