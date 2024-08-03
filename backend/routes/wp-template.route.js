import express from "express";
import { createPages } from "../controllers/wordpress-algorithm/wp-template.controller.js";
const router = express();

// create pages
router.post("/create", createPages);

export default router;
