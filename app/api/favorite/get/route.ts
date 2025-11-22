import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import db from "@/utils/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("productId");

  if (!productId) {
    return NextResponse.json({ favoriteId: null });
  }

  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ favoriteId: null });
  }

  const favorite = await db.favorite.findFirst({
    where: { clerkId: userId, productId },
    select: { id: true },
  });

  return NextResponse.json({
    favoriteId: favorite?.id ?? null,
  });
}
