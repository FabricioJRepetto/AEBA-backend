import { Router } from "express";
const staffRouter = Router();
import { rateSpecialBlock } from "../controllers/staff.controller";
import { StaffRoutes } from "../types/routes";

staffRouter.put(StaffRoutes.RateSpecialBlock, rateSpecialBlock);

export default staffRouter;
