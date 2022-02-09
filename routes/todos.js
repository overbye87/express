import { Router } from "express";
import { getAll } from "../controllers/todos.js";

const todosRouter = Router();

todosRouter.get("/api/todos", getAll);

export default todosRouter;
