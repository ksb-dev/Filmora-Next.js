import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const wishlist = await prisma.wishlist.findMany();
    return NextResponse.json(wishlist);
  } catch (error) {
    return NextResponse.error();
  }
}

// export const dynamic = "auto";
// export const dynamicParams = true;
// export const revalidate = false;
// export const fetchCache = "auto";
// export const runtime = "nodejs";
// export const preferredRegion = "auto";
// export const maxDuration = 5;
