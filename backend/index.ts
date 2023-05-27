import express, { Request, Response } from "express";
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/create", async (req: Request, res: Response) => {
  const { username, hobby, userId } = req.body;
  if (!username || !hobby || !userId) {
    res.status(400).send("Missing username or hobby or userId");
  } else {
    try {
      const newUserData = await prisma.userData.create({
        data: {
          username,
          hobby,
          userId,
        },
      });
      res.json(newUserData);
    } catch (error) {
      console.log(error);
      res.status(500).send("Something went wrong");
    }
  }
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
