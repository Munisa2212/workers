/*
  Warnings:

  - Added the required column `count` to the `OrderTools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderTools" ADD COLUMN     "count" INTEGER NOT NULL;
