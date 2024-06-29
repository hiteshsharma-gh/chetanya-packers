/*
  Warnings:

  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `locations` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_orderId_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "locations" TEXT NOT NULL;

-- DropTable
DROP TABLE "Location";
