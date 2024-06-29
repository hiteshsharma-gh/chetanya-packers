import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET() {
  const session = await getServerSession()

  if (!session || !session.user) return NextResponse.json({})

  const orders = await prisma.customer.findMany()

  return NextResponse.json({ orders })
}
