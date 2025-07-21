import { Router } from "express";
import { AdminRoutes } from "../types/routes";
import { getUsers, manageCompetition, manageUser } from "../controllers/admin.controller";
const adminRouter = Router();

adminRouter.get(AdminRoutes.GetUsers, getUsers);
adminRouter.put(AdminRoutes.ManageUser, manageUser);
adminRouter.put(AdminRoutes.ManageCompetition, manageCompetition);

export default adminRouter;
