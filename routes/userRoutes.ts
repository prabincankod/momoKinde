import { Router } from "express";
import { updatePassword, updateUserSlug } from "../controllers/user.controller";
import auth from "../middlewares/auth";

const userRouter = Router();

// userRouter.get("/:user", momoCampaign);
// userRouter.post("/dummy", auth, async (req, res) => {});
userRouter.patch("/password", auth, updatePassword);
userRouter.patch("/userSlug", auth, updateUserSlug);

export default userRouter;
