import express from "express";
import {
  userLogin,
  userRegistration,
  userLogout,
  userEdit,
} from "../controllers/usersControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const usersRouter = express.Router();

usersRouter.post("/register", userRegistration);

usersRouter.post("/login", userLogin);

usersRouter.post("/logout", authMiddleware, userLogout);

usersRouter.patch("/edit", authMiddleware, userEdit);

export default usersRouter;
