import { Request, Response } from "express";
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const openai = require("openai");

openai.apiKey = process.env.OPENAI_API_KEY;

async function createIdeas(req: Request, res: Response) {
  const { prompt } = req.body;
  const gptResponse = await openai.complete({
    engine: "davinci",
    prompt: prompt,
    maxTokens: 60,
    temperature: 0.9,
  });

  const { choices } = gptResponse.data;
  console.log(choices);
}

export { createIdeas };
