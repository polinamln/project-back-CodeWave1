import express from "express";
import { addCard } from "../controllers/cardControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const cardRouter = express.Router();

cardRouter.post("/:columnId/cards", authMiddleware, addCard);
cardRouter.put("/:id", updateBook);
cardRouter.delete("/", deleteCard);

export default cardRouter;
