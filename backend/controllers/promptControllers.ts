import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function createIdeas(req: Request, res: Response) {
  const { prompt, userId } = req.body;

  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured.",
      },
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    const { text } = completion.data.choices[0];
    res.send(text);
    /* const newPrompt = await prisma.prompt.create({
      data: {
        prompt: prompt,
        userId: userId,
        choices: choices
      }
    }) */
  } catch (error) {
    res.status(500).send("Something went wrong.");
  }
}

export { createIdeas };
