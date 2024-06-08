import express from "express";

import {
    getAllColumns,
    getColumn,
    createColumn,
    deleteColumn,
    updateColumn
} from "../controllers/columnsController.js";
import auth from "../middlewares/authMiddleware.js";
const columnsRouter =  express.Router();
columnsRouter.use(auth)
columnsRouter.get("/", getAllColumns)
columnsRouter.get("/:id", getColumn)
columnsRouter.post("/", createColumn)
columnsRouter.delete("/:id", deleteColumn)
columnsRouter.put("/:id", updateColumn)



export default columnsRouter