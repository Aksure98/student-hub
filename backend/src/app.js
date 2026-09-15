import express from "express";
import cors from "cors";
import { DB_NAME } from "./constants.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Welcome to ${DB_NAME} API`);
});

export default app;