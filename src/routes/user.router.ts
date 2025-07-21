import { Router } from "express";
const userRouter = Router();
import { autoLogin, login, signin, updateBlock } from "../controllers/user.controller";
import { UserRoutes } from "../types/routes";

userRouter.post(UserRoutes.Signin, signin);
userRouter.post(UserRoutes.Login, login);
userRouter.get(UserRoutes.AutoLogin, autoLogin);
userRouter.put(UserRoutes.UpdateBlock, updateBlock);

export default userRouter;
