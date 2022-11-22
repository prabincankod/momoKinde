/*
  Warnings:

  - You are about to drop the column `slug` on the `MomoCampaign` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `MomoCampaign` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `MomoCampaign_slug_key` ON `MomoCampaign`;

-- AlterTable
ALTER TABLE `MomoCampaign` DROP COLUMN `slug`,
    DROP COLUMN `url`;

-- CreateTable
CREATE TABLE `Wallets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `esewaQr` VARCHAR(191) NOT NULL,
    `khaltiQr` VARCHAR(191) NOT NULL,
    `IMEPayQr` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Wallets_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
