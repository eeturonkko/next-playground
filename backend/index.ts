import express from "express";
import { getData, createData } from "./controllers/dataController";
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/data/:userId", getData);
app.post("/api/create", createData);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
