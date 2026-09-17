import { Router } from "express";
import { registerUser } from "../src/controllers/user.controller.js";

const router = Router();

router.post("/register", registerUser);

export default router;