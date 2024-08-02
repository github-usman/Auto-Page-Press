import express from "express";
import { getAllUser } from "../controllers/user-controller/admin.controller.js";
const router = express();

router.route("/users").get(getAllUser);

export default router;
