/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";

import { usePathname, useParams, useRouter } from "next/navigation";

import { usePagination } from "@/hooks/usePagination";

// styles
import styles from "./pagination.module.css";
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

const Pagination = () => {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
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

    getMoviesOrShows(category, type1, Number(currentPage)).then((res) => {
      setTotalPages(res.total_pages);
    });
  }, [currentPage]);

  const paginationRange = usePagination({
    currentPage,
    totalCount: 20,
    siblingCount: 2,
    pageSize: 10,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (Number(currentPage) === 0 || paginationRange!.length < 2) {
    return null;
  }

  const onNext = () => {
    setCurrentPage(Number(currentPage) + 1);
  };

  const onPrevious = () => {
    setCurrentPage(Number(currentPage) - 1);
  };

  let lastPage = paginationRange![paginationRange!.length - 1];

  const handleChange = (e: any) => {
    setCurrentPage(e.target.textContent);
    router.push(`/pages/${type2}/${category}/${e.target.textContent}`);
  };

  return (
    <div className={styles.paginate}>
      <span onClick={handleChange} className="inline-block mr-[1rem]">
        1
      </span>
      <span onClick={handleChange} className="inline-block mr-[1rem]">
        2
      </span>
      <span onClick={handleChange} className="inline-block mr-[1rem]">
        3
      </span>
    </div>
  );
};

export default Pagination;
