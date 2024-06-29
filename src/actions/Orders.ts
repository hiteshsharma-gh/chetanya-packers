import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function allOrders() {
  const orders = await prisma.order.findMany()

  return orders
}

export async function findOrder(orderId: string) {
  const order = await prisma.order.findUnique({
    where: {
      number: orderId
    }
  })

  return order
}

export async function addOrder(orderId: string, location: string) {
  const order = await prisma.order.create({
    data: {
      number: orderId,
      locations: location
    }
  })

  return order
}

export async function updateOrder(orderId: string, location: string) {
  const order = await prisma.order.update({
    where: {
      number: orderId
    },
    data: {
      locations: location
    }
  })

  return order
}

export async function deleteOrder(orderId: string) {
  const order = await prisma.order.delete({
    where: {
      number: orderId
    }
  })

  return order
}
