import express from "express";
require("dotenv").config();
import { getData, createData } from "./controllers/dataController";
import { authorize } from "./middleware/authorize";
const cors = require("cors");
const { Clerk } = require("@clerk/clerk-sdk-node");
const clerk = new Clerk({ apiKey: process.env.CLERK_API_KEY });
module.exports.clerk = clerk;

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/data/:userId", getData);
app.post("/api/create", createData);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
