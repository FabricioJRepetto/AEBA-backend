import { Router } from "express";
const adminRouter = Router();
import { AdminRoutes } from "../types/routes";
import {
    competitionOvertime,
    createCompetition,
    createUser,
    deleteCompetition,
    deleteUser,
    getUsers,
    updateCompetition,
    updateUser,
} from "../controllers/admin.controller";

adminRouter.get(AdminRoutes.GetUsers, getUsers);
adminRouter.post(AdminRoutes.CreateUser, createUser);
adminRouter.put(AdminRoutes.UpdateUser, updateUser);
adminRouter.delete(AdminRoutes.DeleteUser, deleteUser);

adminRouter.post(AdminRoutes.CreateCompetition, createCompetition);
adminRouter.put(AdminRoutes.UpdateCompetition, updateCompetition);
adminRouter.delete(AdminRoutes.DeleteCompetition, deleteCompetition);
adminRouter.put(AdminRoutes.CompetitionOvertime, competitionOvertime);

export default adminRouter;
