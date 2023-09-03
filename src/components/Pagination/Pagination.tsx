/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { usePathname, useParams, useRouter } from "next/navigation";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// react icons
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

// styles
import styles from "./pagination.module.css";
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

export default function Pagination() {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(Number(params.page));
  const [totalPages, setTotalPages] = useState(0);

  const path = pathname.split("/");
  const category = path[path.length - 2];
  let type1 = path[path.length - 3];
  let type2 = path[path.length - 3];

  useEffect(() => {
    if (type1 === "movies") {
      type1 = "movie";
    } else {
      type1 = "tv";
    }

    getMoviesOrShows(category, type1, currentPage).then((res) => {
      setTotalPages(res.total_pages);
    });
  }, [currentPage]);

  function goToNextPage() {
    router.push(`/pages/${type2}/${category}/${currentPage + 1}`);
  }

  function goToPreviousPage() {
    router.push(`/pages/${type2}/${category}/${currentPage - 1}`);
  }

  function changePage(e: any) {
    setCurrentPage(e.target.textContent);
    router.push(`/pages/${type2}/${category}/${e.target.textContent}`);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / 5) * 5;
    return new Array(5).fill(start).map((_, idx) => start + idx + 1);
  };

  return (
    <div className={styles.paginate}>
      {currentPage === 1 ? (
        ""
      ) : (
        <button
          onClick={goToPreviousPage}
          className={styles.btn + " " + styles.active}
        >
          <span className={styles.icon}>
            <MdNavigateBefore />
          </span>
        </button>
      )}

      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={
            styles.btn +
            " " +
            `${
              currentPage === item
                ? styles.active
                : mode
                ? " whiteBg2 blackColor1"
                : " blackBg1 whiteColor1"
            }`
          }
        >
          <span>{item}</span>
        </button>
      ))}

      {currentPage >= totalPages ? (
        <button
          onClick={goToNextPage}
          className={styles.btn + " " + styles.disable}
        >
          <span className={styles.icon + " " + styles.disable_icon}>
            <GrFormNext />
          </span>
        </button>
      ) : (
        <button
          onClick={goToNextPage}
          className={styles.btn + " " + styles.active}
        >
          <span className={styles.icon}>
            <MdNavigateNext />
          </span>
        </button>
      )}
    </div>
  );
}
