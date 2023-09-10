//import { deleteImageFromCloudinaty } from "@/utils/deleteImage";
import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { user } = await request.json();
  const { email } = user;

  const isUserDeleted = await prisma.user.delete({
    where: {
      email,
    },
  });

  if (!isUserDeleted) {
    return NextResponse.json(
      { message: "Failed to delete account." },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { message: "Account deleted." },
    {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}
