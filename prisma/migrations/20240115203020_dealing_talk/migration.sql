-- CreateTable
CREATE TABLE `DealingTalk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,
    `righterId` INTEGER NOT NULL,
    `dealingId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Dealing` ADD CONSTRAINT `Dealing_bioloId_fkey` FOREIGN KEY (`bioloId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DealingTalk` ADD CONSTRAINT `DealingTalk_dealingId_fkey` FOREIGN KEY (`dealingId`) REFERENCES `Dealing`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
