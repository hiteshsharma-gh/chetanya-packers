'use server'

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function addCustomer(name: string, contact: string) {
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        contact
      }
    })

    if (customer) {
      await prisma.customer.update({
        where: {
          contact
        },
        data: {
          time: new Date()
        }
      })

      return { message: "customer already exists" };
    }

    await prisma.customer.create({
      data: {
        name,
        contact
      }
    })

    return { message: "customer added successfully" }
  } catch (error) {
    return { error }
  }
}
