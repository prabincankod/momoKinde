/*
  Warnings:

  - You are about to drop the `Slugs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Slugs`;

-- CreateTable
CREATE TABLE `MomoCampaign` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `MomoCampaign_slug_key`(`slug`),
    UNIQUE INDEX `MomoCampaign_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
