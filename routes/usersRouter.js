import express from "express";
import {
  userLogin,
  userRegistration,
  userLogout,
  userEdit,
  userCurrent,
} from "../controllers/usersControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import imgUploadMiddleware from "../middlewares/imgUploadMiddleware.js";
import { themasCurrent } from "../controllers/themasControllers.js";

const usersRouter = express.Router();

usersRouter.post("/register", userRegistration);

usersRouter.post("/login", userLogin);

usersRouter.post("/logout", authMiddleware, userLogout);

usersRouter.patch(
  "/edit",
  authMiddleware,
  imgUploadMiddleware.single("avatar"),
  userEdit
);

usersRouter.patch ("/thema", authMiddleware, themasCurrent);

usersRouter.get("/current", authMiddleware, userCurrent);

export default usersRouter;
