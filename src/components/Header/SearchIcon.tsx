"use client";

import { useRef } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// react-icons
import { TfiSearch } from "react-icons/tfi";
import { ImSearch } from "react-icons/im";
import SearchModal from "../SearchModal/SearchModal";

const SearchIcon: React.FC = (): JSX.Element => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const buttonRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  const showModal = () => {
    ref.current!.style.display = "flex";
  };

  return (
    <>
      <div
        ref={buttonRef}
        onClick={showModal}
        className={
          "relative w-[400px] py-[0.5rem] px-[1rem] cursor-pointer text-[#999] hidden lg:flex " +
          (mode ? "whiteBg2" : "blackBg2")
        }
      >
        <span className="absolute right-[1rem] top-[0.75rem] text-[#999]">
          <ImSearch />
        </span>
        Search
      </div>

      <p
        ref={buttonRef}
        onClick={showModal}
        className="md:ml-[1rem] flex lg:hidden flex-col md:flex-row items-center justify-center cursor-pointer"
      >
        <span className="inline-block mr-0 md:mr-[0.5rem]">
          <ImSearch />
        </span>
        <span className="text-[0.75rem] font-bold uppercase">Search</span>
      </p>

      <SearchModal ref={ref} />
    </>
  );
};

export default SearchIcon;
