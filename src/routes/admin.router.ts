import { Router } from "express";
const adminRouter = Router();
import { AdminRoutes } from "../types/routes";
import {
    competitionOvertime,
    createCompetition,
    createRegistry,
    createUser,
    deleteCompetition,
    deleteRegistry,
    deleteUser,
    getRegistries,
    getUsers,
    updateCompetition,
    updateParameters,
    updateRegistry,
    updateUser,
} from "../controllers/admin.controller";

// Users
adminRouter.get(AdminRoutes.GetUsers, getUsers);
adminRouter.post(AdminRoutes.CreateUser, createUser);
adminRouter.put(AdminRoutes.UpdateUser, updateUser);
adminRouter.delete(AdminRoutes.DeleteUser, deleteUser);
// Competitions
adminRouter.post(AdminRoutes.CreateCompetition, createCompetition);
adminRouter.put(AdminRoutes.UpdateCompetition, updateCompetition);
adminRouter.delete(AdminRoutes.DeleteCompetition, deleteCompetition);
adminRouter.put(AdminRoutes.CompetitionOvertime, competitionOvertime);
// Parameters
adminRouter.put(AdminRoutes.UpdateParameters, updateParameters);
// Registers
adminRouter.get(AdminRoutes.GetRegistries, getRegistries);
adminRouter.post(AdminRoutes.CreateRegistry, createRegistry);
adminRouter.put(AdminRoutes.UpdateRegistry, updateRegistry);
adminRouter.delete(AdminRoutes.DeleteRegistry, deleteRegistry);

export default adminRouter;
