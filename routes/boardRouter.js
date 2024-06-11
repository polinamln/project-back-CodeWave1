import express from "express";

import { 
    getAllBoard,
    getBoard,
    createBoard,
    deleteBoard,
    updateBoard
 } from "../controllers/boardControllers.js";
import auth from "../middlewares/authMiddleware.js";
import { boardCreateSchema, boardUpdateSchema } from "../schemas/boardSchema.js";
import validateBody from "../helpers/validateBody.js";

const boardRouter = express.Router();

boardRouter.use(auth)
boardRouter.get("/", getAllBoard)
boardRouter.get("/:boardId", getBoard)
boardRouter.post("/", validateBody(boardCreateSchema), createBoard)
boardRouter.delete("/:boardId", deleteBoard)
boardRouter.put("/:boardId", validateBody(boardUpdateSchema), updateBoard)


export default boardRouter;
