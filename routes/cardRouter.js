import express from "express";
import {
  addCard,
  updateCard,
  deleteCard,
} from "../controllers/cardControllers.js";
import auth from "../middlewares/authMiddleware.js";
import { cardSchema } from "../schemas/cardSchema.js";
import validateBody from "../helpers/validateBody.js";

const cardRouter = express.Router();

cardRouter.use(auth);
cardRouter.post("/", validateBody(cardSchema), addCard);
cardRouter.put("/:cardId", validateBody(cardSchema), updateCard);
cardRouter.delete("/:cardId", deleteCard);

export default cardRouter;
