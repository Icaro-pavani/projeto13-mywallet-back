import { Router } from "express";

import { signInUser, signUpUser } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", signUpUser);

authRouter.post("/sign-in", signInUser);

export default authRouter;
