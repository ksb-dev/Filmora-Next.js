import Image from "next/legacy/image";

// styles
import styles from "./card.module.css";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w342";

interface Props {
  poster_path: string;
  title: string | undefined;
}

const CardImage: React.FC<Props> = ({ poster_path, title }): JSX.Element => {
  return (
    <Image
      src={poster_path === null ? url : IMG_PATH + poster_path}
      alt={title}
      layout="fill"
      objectFit="cover"
      // fill={true}
      // priority
      loading="eager"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={styles.image}
    />
  );
};

export default CardImage;
