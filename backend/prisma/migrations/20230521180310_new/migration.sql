/*
  Warnings:

  - You are about to drop the `Hobby` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `hobby` to the `UserData` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Hobby";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "hobby" TEXT NOT NULL
);
INSERT INTO "new_UserData" ("id", "username") SELECT "id", "username" FROM "UserData";
DROP TABLE "UserData";
ALTER TABLE "new_UserData" RENAME TO "UserData";
CREATE UNIQUE INDEX "UserData_username_key" ON "UserData"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
