/*
  Warnings:

  - Made the column `userSlug` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `userSlug` VARCHAR(191) NOT NULL;
