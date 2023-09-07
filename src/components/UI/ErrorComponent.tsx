// styles
import styles from "./ui.module.css";

export default function ErrorComponent({ error, reset }: ErrorMsg) {
  return (
    <div>
      <p className={styles.error_text}>{error.message}</p>
      <p className="mb-[1rem] text-[var(--blue)] text-[1.1rem]">
        Check your internet connection.
      </p>
      <button onClick={() => reset()} className={styles.try_btn}>
        Try Again
      </button>
    </div>
  );
}
