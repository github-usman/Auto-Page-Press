import express from "express";
import { greetingServer } from "../controllers/greeting.controller.js";
const router = express();

router.get("", greetingServer);

export default router;
