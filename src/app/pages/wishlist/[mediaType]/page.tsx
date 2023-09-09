/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

// lib
import { getWishlist } from "@/lib/getWishlist";

// import { prisma } from "@/lib/prisma";
// import { revalidatePath } from "next/cache";

// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/getAuthOptions";

// async function getWishlist() {
//   "use server";

//   revalidatePath("http://localhost:3000/pages/wishlist/all");

//   return await prisma.wishlist.findMany();
// }

export default function Wishlist() {
  const { data: session } = useSession();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    session && getWishlist().then((res) => setWishlist(res));
  }, []);

  //const session = await getServerSession(authOptions);
  //const wishlist = session && (await getWishlist());

  return <div>{wishlist.length}</div>;
}
