import express from "express";
import {
  addCard,
  updateCard,
  deleteCard,
} from "../controllers/cardControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const cardRouter = express.Router();

cardRouter.post("/:columnId/cards", authMiddleware, addCard);
cardRouter.put("/cards/:cardId", updateCard);
cardRouter.delete("/cards/:cardId", deleteCard);

export default cardRouter;
