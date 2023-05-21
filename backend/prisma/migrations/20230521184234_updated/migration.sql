/*
  Warnings:

  - Added the required column `userId` to the `UserData` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "hobby" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);
INSERT INTO "new_UserData" ("hobby", "id", "username") SELECT "hobby", "id", "username" FROM "UserData";
DROP TABLE "UserData";
ALTER TABLE "new_UserData" RENAME TO "UserData";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
