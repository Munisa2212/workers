/*
  Warnings:

  - The primary key for the `Basket` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Basket` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Brand` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Brand` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Capacity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Capacity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Comment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Contact` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Contact` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `FAQ` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `FAQ` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `GeneralInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `GeneralInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Level` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Level` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Master` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Master` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MasterProd` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `MasterProd` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MasterRatings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `MasterRatings` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `OrderMasters` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `OrderMasters` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `OrderProducts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `OrderProducts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Partners` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Partners` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ProductLevels` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ProductLevels` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ProductTools` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ProductTools` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Region` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Region` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Session` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Size` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Size` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tools` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Tools` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `showCase` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `showCase` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `productId` on the `Basket` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `toolId` on the `Basket` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Basket` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `levelId` on the `Basket` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `orderId` on the `Comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `masterId` on the `MasterProd` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `productId` on the `MasterProd` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `levelId` on the `MasterProd` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `masterId` on the `MasterRatings` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `commentId` on the `MasterRatings` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `orderId` on the `OrderMasters` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `masterId` on the `OrderMasters` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `orderId` on the `OrderProducts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `productId` on the `OrderProducts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `levelId` on the `OrderProducts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `toolId` on the `OrderProducts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `levelId` on the `ProductLevels` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `productId` on the `ProductLevels` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `toolId` on the `ProductTools` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `productId` on the `ProductTools` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Session` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `capacityId` on the `Tools` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `sizeId` on the `Tools` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `brandId` on the `Tools` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `regionId` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Basket" DROP CONSTRAINT "Basket_levelId_fkey";

-- DropForeignKey
ALTER TABLE "Basket" DROP CONSTRAINT "Basket_productId_fkey";

-- DropForeignKey
ALTER TABLE "Basket" DROP CONSTRAINT "Basket_toolId_fkey";

-- DropForeignKey
ALTER TABLE "Basket" DROP CONSTRAINT "Basket_userId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "MasterProd" DROP CONSTRAINT "MasterProd_levelId_fkey";

-- DropForeignKey
ALTER TABLE "MasterProd" DROP CONSTRAINT "MasterProd_masterId_fkey";

-- DropForeignKey
ALTER TABLE "MasterProd" DROP CONSTRAINT "MasterProd_productId_fkey";

-- DropForeignKey
ALTER TABLE "MasterRatings" DROP CONSTRAINT "MasterRatings_commentId_fkey";

-- DropForeignKey
ALTER TABLE "MasterRatings" DROP CONSTRAINT "MasterRatings_masterId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "OrderMasters" DROP CONSTRAINT "OrderMasters_masterId_fkey";

-- DropForeignKey
ALTER TABLE "OrderMasters" DROP CONSTRAINT "OrderMasters_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderProducts" DROP CONSTRAINT "OrderProducts_levelId_fkey";

-- DropForeignKey
ALTER TABLE "OrderProducts" DROP CONSTRAINT "OrderProducts_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderProducts" DROP CONSTRAINT "OrderProducts_productId_fkey";

-- DropForeignKey
ALTER TABLE "OrderProducts" DROP CONSTRAINT "OrderProducts_toolId_fkey";

-- DropForeignKey
ALTER TABLE "ProductLevels" DROP CONSTRAINT "ProductLevels_levelId_fkey";

-- DropForeignKey
ALTER TABLE "ProductLevels" DROP CONSTRAINT "ProductLevels_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTools" DROP CONSTRAINT "ProductTools_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTools" DROP CONSTRAINT "ProductTools_toolId_fkey";

-- DropForeignKey
ALTER TABLE "Tools" DROP CONSTRAINT "Tools_brandId_fkey";

-- DropForeignKey
ALTER TABLE "Tools" DROP CONSTRAINT "Tools_capacityId_fkey";

-- DropForeignKey
ALTER TABLE "Tools" DROP CONSTRAINT "Tools_sizeId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_regionId_fkey";

-- AlterTable
ALTER TABLE "Basket" DROP CONSTRAINT "Basket_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL,
DROP COLUMN "toolId",
ADD COLUMN     "toolId" INTEGER NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "levelId",
ADD COLUMN     "levelId" INTEGER NOT NULL,
ADD CONSTRAINT "Basket_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Brand" DROP CONSTRAINT "Brand_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Brand_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Capacity" DROP CONSTRAINT "Capacity_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Capacity_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "orderId",
ADD COLUMN     "orderId" INTEGER NOT NULL,
ADD CONSTRAINT "Comment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Contact_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "FAQ" DROP CONSTRAINT "FAQ_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "GeneralInfo" DROP CONSTRAINT "GeneralInfo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "GeneralInfo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Level" DROP CONSTRAINT "Level_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Level_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Master" DROP CONSTRAINT "Master_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Master_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MasterProd" DROP CONSTRAINT "MasterProd_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "masterId",
ADD COLUMN     "masterId" INTEGER NOT NULL,
DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL,
DROP COLUMN "levelId",
ADD COLUMN     "levelId" INTEGER NOT NULL,
ADD CONSTRAINT "MasterProd_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MasterRatings" DROP CONSTRAINT "MasterRatings_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "masterId",
ADD COLUMN     "masterId" INTEGER NOT NULL,
DROP COLUMN "commentId",
ADD COLUMN     "commentId" INTEGER NOT NULL,
ADD CONSTRAINT "MasterRatings_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Order" DROP CONSTRAINT "Order_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "OrderMasters" DROP CONSTRAINT "OrderMasters_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "orderId",
ADD COLUMN     "orderId" INTEGER NOT NULL,
DROP COLUMN "masterId",
ADD COLUMN     "masterId" INTEGER NOT NULL,
ADD CONSTRAINT "OrderMasters_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "OrderProducts" DROP CONSTRAINT "OrderProducts_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "orderId",
ADD COLUMN     "orderId" INTEGER NOT NULL,
DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL,
DROP COLUMN "levelId",
ADD COLUMN     "levelId" INTEGER NOT NULL,
DROP COLUMN "toolId",
ADD COLUMN     "toolId" INTEGER NOT NULL,
ADD CONSTRAINT "OrderProducts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Partners" DROP CONSTRAINT "Partners_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Partners_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ProductLevels" DROP CONSTRAINT "ProductLevels_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "levelId",
ADD COLUMN     "levelId" INTEGER NOT NULL,
DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL,
ADD CONSTRAINT "ProductLevels_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ProductTools" DROP CONSTRAINT "ProductTools_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "toolId",
ADD COLUMN     "toolId" INTEGER NOT NULL,
DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL,
ADD CONSTRAINT "ProductTools_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Region" DROP CONSTRAINT "Region_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Region_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Session" DROP CONSTRAINT "Session_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Size" DROP CONSTRAINT "Size_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Size_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Tools" DROP CONSTRAINT "Tools_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "capacityId",
ADD COLUMN     "capacityId" INTEGER NOT NULL,
DROP COLUMN "sizeId",
ADD COLUMN     "sizeId" INTEGER NOT NULL,
DROP COLUMN "brandId",
ADD COLUMN     "brandId" INTEGER NOT NULL,
ADD CONSTRAINT "Tools_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "regionId",
ADD COLUMN     "regionId" INTEGER NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "showCase" DROP CONSTRAINT "showCase_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "showCase_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tools" ADD CONSTRAINT "Tools_capacityId_fkey" FOREIGN KEY ("capacityId") REFERENCES "Capacity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tools" ADD CONSTRAINT "Tools_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tools" ADD CONSTRAINT "Tools_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterProd" ADD CONSTRAINT "MasterProd_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Master"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterProd" ADD CONSTRAINT "MasterProd_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterProd" ADD CONSTRAINT "MasterProd_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductLevels" ADD CONSTRAINT "ProductLevels_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductLevels" ADD CONSTRAINT "ProductLevels_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTools" ADD CONSTRAINT "ProductTools_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTools" ADD CONSTRAINT "ProductTools_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProducts" ADD CONSTRAINT "OrderProducts_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProducts" ADD CONSTRAINT "OrderProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProducts" ADD CONSTRAINT "OrderProducts_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProducts" ADD CONSTRAINT "OrderProducts_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderMasters" ADD CONSTRAINT "OrderMasters_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderMasters" ADD CONSTRAINT "OrderMasters_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Master"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterRatings" ADD CONSTRAINT "MasterRatings_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterRatings" ADD CONSTRAINT "MasterRatings_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Master"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
