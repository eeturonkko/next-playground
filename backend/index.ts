import express from "express";
require("dotenv").config();
const cors = require("cors");
import { getData, createData, deleteData } from "./controllers/dataController";
import { createIdeas } from "./controllers/promptControllers";

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes for data submissions
app.get("/api/data/:userId", getData);
app.post("/api/create", createData);
app.delete("/api/delete/:id", deleteData);

// Routes for openAI API calls
app.post("/api/completion", createIdeas);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
