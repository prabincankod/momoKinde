import { Router } from "express";

import { login, signUp } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", login);
export default authRouter;
