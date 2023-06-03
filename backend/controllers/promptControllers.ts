import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createIdeas(req: Request, res: Response) {
  console.log("hi mom");
}

export { createIdeas };
