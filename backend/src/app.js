import express from "express";
import cors from "cors";
import router from "../route/user.route.js";
import { DB_NAME } from "./constants.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", router);

app.get("/", (req, res) => {
  res.send(`Welcome to my ${DB_NAME} API`);
});

export default app;