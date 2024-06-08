import express from "express";

import { 
    getAllBoard,
    getBoard,
    createBoard,
    deleteBoard,
    updateBoard
 } from "../controllers/boardControllers.js";
import auth from "../middlewares/authMiddleware.js";


const boardRouter = express.Router();

boardRouter.use(auth)
boardRouter.get("/", getAllBoard)
boardRouter.get("/:id", getBoard)
boardRouter.post("/", createBoard)
boardRouter.delete("/:id", deleteBoard)
boardRouter.put("/:id", updateBoard)


export default boardRouter;
