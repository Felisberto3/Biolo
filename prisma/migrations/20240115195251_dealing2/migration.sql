/*
  Warnings:

  - Added the required column `posterId` to the `Dealing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `dealing` ADD COLUMN `posterId` INTEGER NOT NULL;
