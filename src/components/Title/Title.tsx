import Link from "next/link";

// react-icons
import { GiFilmSpool } from "react-icons/gi";

const Title: React.FC = (): JSX.Element => {
  return (
    <Link
      href="/pages/movies/popular/1"
      className="link relative flex text-[1.75rem] font-bold text-[#fff]"
    >
      <span className="text">Film</span>
      <span className="absolute left-[3.5rem] text-[2.25rem] top-2">
        <GiFilmSpool />
      </span>
      <span className="ml-[2.25rem]">ra</span>
    </Link>
  );
};

export default Title;
