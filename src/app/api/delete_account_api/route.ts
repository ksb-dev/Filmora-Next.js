//import { deleteImageFromCloudinaty } from "@/utils/deleteImage";
import { PrismaClient } from "@prisma/client";

import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

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

  return NextResponse.json({ message: "Account deleted." }, { status: 201 });
}
