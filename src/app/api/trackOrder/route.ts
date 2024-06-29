import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  const { orderId } = await request.json()
  console.log(orderId)

  const order = await prisma.order.findUnique({
    where: {
      number: orderId
    }
  })

  console.log(order)
  return NextResponse.json({ order })
}
