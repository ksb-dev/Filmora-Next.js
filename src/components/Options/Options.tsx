// styles
import styles from "./options.module.css";

const Options = () => {
  return (
    <div className={styles.options + " flex justify-center"}>
      <span className="mr-[1rem] cursor-pointer">Movies</span>

      <span className="ml-[1rem] cursor-pointer">TV Shows</span>
    </div>
  );
};

export default Options;
