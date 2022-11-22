/*
  Warnings:

  - A unique constraint covering the columns `[userSlug]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `userSlug` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_userSlug_key` ON `User`(`userSlug`);
