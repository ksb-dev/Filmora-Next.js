"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

// lib
import { getWishlist } from "@/lib/getWishlist";

export default function Wishlist() {
  const { data: session } = useSession();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    session && getWishlist().then((res) => setWishlist(res));
  }, [session]);

  return <div>{wishlist.length}</div>;
}
