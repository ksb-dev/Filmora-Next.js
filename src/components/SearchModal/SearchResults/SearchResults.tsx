// components
import Result from "./Result/Result";

// styles
import styles from "./searchResults.module.css";

interface Props {
  searchResults: SearchResult[];
}

const SearchResults: React.FC<Props> = ({ searchResults }) => {
  return (
    <div className={styles.search_results}>
      {searchResults.map((result, index) => (
        <Result key={index} result={result} />
      ))}
    </div>
  );
};

export default SearchResults;
