import { usePathname, useRouter } from "next/navigation";

// react-icons
import { BiCheck } from "react-icons/bi";

// styles
import styles from "./options.module.css";

interface Props {
  hideNav: () => void;
}

const Options: React.FC<Props> = ({ hideNav }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={styles.options_container}>
      <p className={styles.options_heading}>Options</p>

      <div
        className={styles.option_div}
        onClick={() => {
          router.push("/pages/movies/popular/1");
          hideNav();
        }}
      >
        {pathname.includes("/pages/movies") ? (
          <p className={styles.checked_div}>
            <span className={styles.checked_icon}>
              <BiCheck />
            </span>
          </p>
        ) : (
          <span className={styles.not_checked_icon}></span>
        )}
        <span>Movies</span>
      </div>

      <div
        className={styles.option_div}
        onClick={() => {
          router.push("/pages/tv/popular/1");
          hideNav();
        }}
      >
        {pathname.includes("/pages/tv") ? (
          <p className={styles.checked_div}>
            <span className={styles.checked_icon}>
              <BiCheck />
            </span>
          </p>
        ) : (
          <span className={styles.not_checked_icon}></span>
        )}
        <span>Tv Shows</span>
      </div>
    </div>
  );
};

export default Options;
