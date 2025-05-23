/*
  Warnings:

  - You are about to drop the column `price` on the `OrderProducts` table. All the data in the column will be lost.
  - Changed the type of `date` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "OrderProducts" DROP COLUMN "price";
