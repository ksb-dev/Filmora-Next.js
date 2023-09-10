import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { email, cardId, mediaType } = await request.json();

  const currentUser = await prisma.user
    .findUnique({
      where: {
        email: email,
      },
    })
    .then((user: any) => user?.id);

  // const movie = await prisma.movie.create({
  //   data: {
  //     cardId: cardId,
  //     mediaType: mediaType,
  //     userId: String(currentUser),
  //   },
  // });

  const wishlist = await prisma.wishlist.create({
    data: {
      cardId: cardId,
      mediaType: mediaType,
      userId: String(currentUser),
    },
  });

  if (!wishlist) {
    return NextResponse.json(
      { message: "Failed to add wishlist." },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { message: "Wishlist Added." },
    {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}
