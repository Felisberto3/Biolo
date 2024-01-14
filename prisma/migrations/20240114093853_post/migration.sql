/*
  Warnings:

  - You are about to drop the column `content` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `post` DROP COLUMN `content`,
    DROP COLUMN `published`,
    ADD COLUMN `category` VARCHAR(191) NULL,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `imagePath` VARCHAR(191) NULL,
    ADD COLUMN `stage` ENUM('sold', 'onSell') NULL;
