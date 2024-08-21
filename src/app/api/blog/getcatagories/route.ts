import prisma from "@/app/database/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const categories = await prisma.categories.findMany();
  return NextResponse.json(categories);
}
