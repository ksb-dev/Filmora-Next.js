"use client";

import { useRef } from "react";

// react-icons
import { TfiSearch } from "react-icons/tfi";
import SearchModal from "../SearchModal/SearchModal";

const SearchIcon: React.FC = (): JSX.Element => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  const showModal = () => {
    ref.current!.style.display = "flex";
  };

  return (
    <>
      <p
        ref={buttonRef}
        onClick={showModal}
        className="ml-[1rem] flex flex-col items-center justify-center cursor-pointer"
      >
        <span className="inline-block mb-[0.25rem]">
          <TfiSearch />
        </span>
        <span className="text-[0.75rem] font-bold uppercase">Search</span>
      </p>

      <SearchModal ref={ref} />
    </>
  );
};

export default SearchIcon;
