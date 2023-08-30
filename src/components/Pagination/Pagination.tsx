/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";

import { usePathname, useParams, useRouter } from "next/navigation";

// styles
import styles from "./pagination.module.css";
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

const Pagination = () => {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const [page, setPage] = useState(params.page);
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

    getMoviesOrShows(category, type1, page).then((res) => {
      setTotalPages(res.total_pages);
    });
  }, [page]);

  const changePage = (e: any) => {
    setPage(e.target.textContent);
    router.push(`/pages/${type2}/${category}/${e.target.textContent}`);
  };

  return (
    <div className={styles.paginate}>
      <span
        className="inline-block mr-[1rem] cursor-pointer"
        onClick={changePage}
      >
        1
      </span>
      <span
        className="inline-block mr-[1rem] cursor-pointer"
        onClick={changePage}
      >
        2
      </span>
      <span
        className="inline-block mr-[1rem] cursor-pointer"
        onClick={changePage}
      >
        3
      </span>
    </div>
  );
};

export default Pagination;
