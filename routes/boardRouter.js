import express from "express";

import { 
    getAllBoard,
    getBoard,
    createBoard,
    deleteBoard,
    updateBoard
 } from "../controllers/boardControllers.js";
import auth from "../middlewares/authMiddleware.js";
import { boardSchema } from "../schemas/boardSchema.js";
import validateBody from "../helpers/validateBody.js";

const boardRouter = express.Router();

boardRouter.use(auth)
boardRouter.get("/", getAllBoard)
boardRouter.get("/:boardId", getBoard)
boardRouter.post("/", validateBody(boardSchema), createBoard)
boardRouter.delete("/:boardId", deleteBoard)
boardRouter.put("/:boardId", validateBody(boardSchema), updateBoard)


export default boardRouter;
