import Link from "next/link";

// react-icons
import { GiFilmSpool } from "react-icons/gi";

const Title: React.FC = (): JSX.Element => {
  return (
    <Link
      href="/pages/movies/popular/1"
      className="link relative flex text-[2rem] font-bold text-[var(--blue)]"
    >
      <span className="text">Film</span>
      <span className="absolute left-[4rem] text-[3rem] top-1">
        <GiFilmSpool />
      </span>
      <span className="ml-[2.85rem]">ra</span>
    </Link>
  );
};

export default Title;
