/*
  Warnings:

  - You are about to drop the column `User_id` on the `blogs` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "blogs" DROP CONSTRAINT "blogs_User_id_fkey";

-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "User_id",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
