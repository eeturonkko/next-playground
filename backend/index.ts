import express, { Request, Response } from "express";
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/api/create", (req: Request, res: Response) => {
  const { username, hobby } = req.body;
  if (!username || !hobby) {
    res.status(400).send("Missing username or hobby");
  } else {
    res.json(`username: ${username} hobby: ${hobby}`);
    console.log(`username: ${username} hobby: ${hobby}`);
  }
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
