import { Request, Response } from "express";
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const openai = require("openai");

openai.apiKey = process.env.OPENAI_API_KEY;

async function createIdeas(req: Request, res: Response) {
  const { prompt, userId } = req.body;
  try {
    const gptResponse = await openai.Completion.create({
      engine: "davinci-codex",
      prompt: prompt,
      max_tokens: 60,
      temperature: 0.9,
    });

    const { choices } = gptResponse.data;
    const choicesForDb = choices.map((choice: any) => choice.text);
    const newPrompt = await prisma.prompts.create({
      data: {
        prompt,
        userId: userId,
        choices: JSON.stringify(choicesForDb),
      },
    });
    console.log(choicesForDb);
    res.json(newPrompt);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}

export { createIdeas };
