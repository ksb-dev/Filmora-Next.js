import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
  const { email, cardId, mediaType } = await request.json();

  const currentUser = await prisma.user
    .findUnique({
      where: {
        email: email,
      },
    })
    .then((user: any) => user?.id);

  if (mediaType === "movie") {
    const response = await addMovie(currentUser, cardId, mediaType);
    return response;
  } else {
    const response = await addTv(currentUser, cardId, mediaType);
    return response;
  }

  return NextResponse.json(
    { message: "Internal server error" },
    { status: 500 }
  );
}

const addMovie = async (
  currentUser: string,
  cardId: string,
  mediaType: string
) => {
  const movie = await prisma.movie.create({
    data: {
      cardId: cardId,
      mediaType: mediaType,
      userId: String(currentUser),
    },
  });

  const wishlist = await prisma.wishlist.create({
    data: {
      cardId: cardId,
      mediaType: mediaType,
      userId: String(currentUser),
    },
  });

  if (!movie || !wishlist) {
    return NextResponse.json(
      { message: "Failed to add wishlist." },
      { status: 400 }
    );
  }
  return NextResponse.json({ message: "Watchlist Added." }, { status: 201 });
};

const addTv = async (
  currentUser: string,
  cardId: string,
  mediaType: string
) => {
  const tv = await prisma.tvShow.create({
    data: {
      cardId: cardId,
      mediaType: mediaType,
      userId: String(currentUser),
    },
  });

  const wishlist = await prisma.wishlist.create({
    data: {
      cardId: cardId,
      mediaType: mediaType,
      userId: String(currentUser),
    },
  });

  if (!tv || !wishlist) {
    return NextResponse.json(
      { message: "Failed to add watchlist." },
      { status: 400 }
    );
  }
  return NextResponse.json({ message: "Watchlist Added." }, { status: 201 });
};
