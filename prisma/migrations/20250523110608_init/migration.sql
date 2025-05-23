/*
  Warnings:

  - You are about to drop the column `measure` on the `Basket` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Basket` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `Basket` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Basket" DROP CONSTRAINT "Basket_levelId_fkey";

-- DropForeignKey
ALTER TABLE "Basket" DROP CONSTRAINT "Basket_productId_fkey";

-- DropForeignKey
ALTER TABLE "Basket" DROP CONSTRAINT "Basket_toolId_fkey";

-- AlterTable
ALTER TABLE "Basket" DROP COLUMN "measure",
DROP COLUMN "quantity",
DROP COLUMN "total",
ALTER COLUMN "productId" DROP NOT NULL,
ALTER COLUMN "toolId" DROP NOT NULL,
ALTER COLUMN "levelId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tools"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE SET NULL ON UPDATE CASCADE;
