import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const wishlist = await prisma.wishlist.findMany();

  return NextResponse.json(wishlist);
}
