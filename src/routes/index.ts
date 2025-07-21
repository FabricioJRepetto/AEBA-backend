import { Router } from "express";
const router = Router();
import { Routes } from "../types/routes";
import baseRouter from "./base.router";
import userRouter from "./user.router";
import staffRouter from "./staff.router";
import adminRouter from "./admin.router";

router.get("/", (_req, res) => {
    res.send("Bienvenido al backend de AEBA Tournament Companion!");
});

router.get("/sensei", (_req, res) => {
    res.send("El facusama te bendice.");
});

router.use(Routes.Base, baseRouter);
router.use(Routes.User, userRouter);
router.use(Routes.Staff, staffRouter);
router.use(Routes.Admin, adminRouter);

export default router;
