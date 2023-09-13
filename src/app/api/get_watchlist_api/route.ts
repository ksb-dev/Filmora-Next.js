import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// export const dynamic = "auto";
// export const dynamicParams = true;
// export const revalidate = false;
// export const fetchCache = "auto";
// export const runtime = "nodejs";
// export const preferredRegion = "auto";
// export const maxDuration = 5;

export async function GET(request: Request) {
  const wishlist = await prisma.wishlist.findMany();

  return NextResponse.json(wishlist);
}
