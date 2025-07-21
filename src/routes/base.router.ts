import { Router } from "express";
import { BaseRoutes } from "../types/routes";
import { competition, leaderboard, parameters } from "../controllers/base.controller";
const baseRouter = Router();

baseRouter.get(BaseRoutes.Competition, competition);
baseRouter.get(BaseRoutes.LeaderBoard, leaderboard);
baseRouter.get(BaseRoutes.Parameters, parameters);

export default baseRouter;
