-- CreateTable
CREATE TABLE "UserData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Hobby" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hobbyName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Hobby_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserData" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "UserData_username_key" ON "UserData"("username");
