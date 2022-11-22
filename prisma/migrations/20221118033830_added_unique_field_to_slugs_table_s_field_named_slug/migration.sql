/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Slugs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Slugs_slug_key` ON `Slugs`(`slug`);
