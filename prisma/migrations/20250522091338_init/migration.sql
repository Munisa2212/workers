/*
  Warnings:

  - You are about to drop the column `commentToDelivery` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `measure` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `productCount` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `toolId` on the `OrderProducts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderProducts" DROP CONSTRAINT "OrderProducts_toolId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "commentToDelivery",
DROP COLUMN "measure",
DROP COLUMN "productCount",
DROP COLUMN "quantity",
ALTER COLUMN "status" SET DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "OrderProducts" DROP COLUMN "toolId";

-- CreateTable
CREATE TABLE "OrderTools" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "toolsId" INTEGER NOT NULL,

    CONSTRAINT "OrderTools_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderTools" ADD CONSTRAINT "OrderTools_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderTools" ADD CONSTRAINT "OrderTools_toolsId_fkey" FOREIGN KEY ("toolsId") REFERENCES "Tools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
