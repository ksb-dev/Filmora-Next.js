import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(request: NextRequest) {
  const { email, cardId, mediaType } = await request.json();

  const currentUser = await prisma.user
    .findUnique({
      where: {
        email: email,
      },
    })
    .then((user: any) => user?.id);

  if (mediaType === "movie") {
    const movieToDelete = await prisma.movie.findFirst({
      where: {
        cardId,
        mediaType,
        userId: currentUser,
      },
    });

    const watchlistToDelete = await prisma.wishlist.findFirst({
      where: {
        cardId,
        mediaType,
        userId: currentUser,
      },
    });

    if (!movieToDelete || !watchlistToDelete) {
      return NextResponse.json(
        { message: "Movie you're trying to delete not found!" },
        { status: 400 }
      );
    }

    const response1 = await prisma.movie.delete({
      where: {
        id: movieToDelete.id,
      },
    });

    const response2 = await prisma.wishlist.delete({
      where: {
        id: watchlistToDelete.id,
      },
    });

    if (!response1 || !response2) {
      return NextResponse.json(
        { message: "Failed to delete movie" },
        { status: 400 }
      );
    }
  } else {
    const tvToDelete = await prisma.tvShow.findFirst({
      where: {
        cardId,
        mediaType,
        userId: currentUser,
      },
    });

    const watchlistToDelete = await prisma.wishlist.findFirst({
      where: {
        cardId,
        mediaType,
        userId: currentUser,
      },
    });

    if (!tvToDelete || !watchlistToDelete) {
      return NextResponse.json(
        { message: "Movie you're trying to delete not found!" },
        { status: 400 }
      );
    }

    const response1 = await prisma.tvShow.delete({
      where: {
        id: tvToDelete.id,
      },
    });

    const response2 = await prisma.wishlist.delete({
      where: {
        id: watchlistToDelete.id,
      },
    });

    if (!response1 || !response2) {
      return NextResponse.json(
        { message: "Failed to delete movie" },
        { status: 400 }
      );
    }
  }

  return NextResponse.json(
    { message: "Watchlist deleted successfully!" },
    { status: 201 }
  );
}
