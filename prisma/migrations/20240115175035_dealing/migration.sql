-- CreateTable
CREATE TABLE `Dealing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `posterId` INTEGER NOT NULL,
    `buyerId` INTEGER NOT NULL,
    `bioloId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
