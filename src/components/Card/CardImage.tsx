import Image from "next/legacy/image";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w342";

export default function CardImage({ poster_path, title }: any) {
  return (
    <>
      <Image
        src={poster_path === null ? url : IMG_PATH + poster_path}
        alt={title}
        layout="fill"
        objectFit="cover"
        // fill={true}
        // priority
        loading="eager"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </>
  );
}
