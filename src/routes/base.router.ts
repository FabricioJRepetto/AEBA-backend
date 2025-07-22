import { Router } from "express";
import { BaseRoutes } from "../types/routes";
import { competitions, getCompetition, leaderboard, parameters } from "../controllers/base.controller";
const baseRouter = Router();

baseRouter.get(BaseRoutes.GetCompetition, getCompetition);
baseRouter.get(BaseRoutes.Competitions, competitions);
baseRouter.get(BaseRoutes.LeaderBoard, leaderboard);
baseRouter.get(BaseRoutes.Parameters, parameters);

export default baseRouter;
