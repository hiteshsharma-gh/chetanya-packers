import { addOrder, deleteOrder, updateOrder } from "@/actions/Orders";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession()

  if (!session || !session.user) return NextResponse.json({})

  const { orderId, location } = await request.json()
  const order = await addOrder(orderId, location)

  revalidatePath('/admin/allorder')
  return NextResponse.json({ order })
}

export async function PUT(request: NextRequest) {
  const session = await getServerSession()

  if (!session || !session.user) return NextResponse.json({})

  const { orderId, location } = await request.json()
  const order = await updateOrder(orderId, location)

  revalidatePath('/admin/allorder')
  return NextResponse.json({ order })
}

export async function DELETE(request: NextRequest) {
  const session = await getServerSession()

  if (!session || !session.user) return NextResponse.json({})

  const { orderId } = await request.json()
  const order = await deleteOrder(orderId)

  revalidatePath('/admin/allorder')
  return NextResponse.json({ order })
}
