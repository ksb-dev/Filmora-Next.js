// styles
import styles from "./ui.module.css";

export default function ErrorComponent({ error, reset }: ErrorMsg) {
  return (
    <div>
      <h2 className={styles.error_text}>{error.message}</h2>
      <p className="mb-[1rem] text-[var(--blue)]">
        Check your internet connection.
      </p>
      <button onClick={() => reset()} className={styles.try_btn}>
        Try Again
      </button>
    </div>
  );
}
