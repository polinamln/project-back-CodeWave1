import express from "express";
import {
  userLogin,
  userRegistration,
  userLogout,
  userCurrent,
  userAvatar,
} from "../controllers/usersControllers.js";

const usersRouter = express.Router();

usersRouter.post("/register", userRegistration);

usersRouter.post("/login", userLogin);

usersRouter.post("/logout", userLogout);

usersRouter.get("/current", userCurrent);

usersRouter.patch("/avatars", userAvatar);

// usersRouter.get("/avatars/:fileName",  getAvatar);

export default usersRouter;
