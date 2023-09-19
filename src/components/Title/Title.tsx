import Link from "next/link";

const Title: React.FC = (): JSX.Element => {
  return (
    <Link
      href="/"
      className="bg-[var(--gold)] text-[1.25rem] text-black px-[0.5rem] py-[0.1rem] font-[900] rounded-[5px] tracking-[-0.5px]"
    >
      TMDb
    </Link>
  );
};

export default Title;
