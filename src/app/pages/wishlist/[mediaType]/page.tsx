/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

// lib
import { getWatchlist } from "@/lib/getWatchlist";

export default function Wishlist() {
  const { data: session } = useSession();
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    session && getWatchlist().then((res: any) => setWatchlist(res));
  }, []);

  return <div>{watchlist.length}</div>;
}
