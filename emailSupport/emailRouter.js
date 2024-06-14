import express from "express";

import { sendHelp } from "./emailController.js";
import { emailSchema } from "./emailSchema.js";
import auth from "../middlewares/authMiddleware.js";
import validateBody from "../helpers/validateBody.js";

const helpRouter = express.Router();

helpRouter.use(auth)
helpRouter.post("/", validateBody(emailSchema), sendHelp)


export default helpRouter