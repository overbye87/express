import { Router } from "express";
import {
  getMainPage,
  getFeaturesPage,
  getAboutPage,
} from "../controllers/app.js";

const appRouter = Router();

appRouter.get("/", getMainPage);
appRouter.get("/features", getFeaturesPage);
appRouter.get("/about", getAboutPage);

export default appRouter;
