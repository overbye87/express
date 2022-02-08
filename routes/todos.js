import { Router } from "express";
import { getAll } from "../controllers/todos.js";

const router = Router();

router.get("/api/todos", getAll);

export default router;
