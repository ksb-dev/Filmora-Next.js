import Link from "next/link";

// react-icons
import { GiFilmSpool } from "react-icons/gi";

const Title: React.FC = (): JSX.Element => {
  return (
    // <Link
    //   href="/pages/movies/popular/1"
    //   className="link relative flex text-[1.75rem] font-semibold text-[var(--gold)]"
    // >
    //   <span className="text">Film</span>
    //   <span className="absolute left-[3.3rem] text-[2.25rem] top-2">
    //     <GiFilmSpool />
    //   </span>
    //   <span className="ml-[2.2rem]">ra</span>
    // </Link>
    <Link
      href="/pages/movies/popular/1"
      className="bg-[var(--gold)] text-[1.25rem] text-black px-[0.5rem] py-[0.1rem] font-[900] rounded-[5px] tracking-[-0.5px]"
    >
      TMDb
    </Link>
  );
};

export default Title;
