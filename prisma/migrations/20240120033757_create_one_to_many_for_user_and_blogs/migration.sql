/*
  Warnings:

  - Added the required column `User_id` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "blogs" DROP CONSTRAINT "blogs_id_fkey";

-- AlterTable
ALTER TABLE "blogs" ADD COLUMN     "User_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_User_id_fkey" FOREIGN KEY ("User_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
