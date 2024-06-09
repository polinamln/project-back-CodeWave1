import express from "express";

import {
    getAllColumns,
    getColumn,
    createColumn,
    deleteColumn,
    updateColumn
} from "../controllers/columnsController.js";
import auth from "../middlewares/authMiddleware.js";
import { columnSchema } from "../schemas/columnSchemas.js";
import validateBody from "../helpers/validateBody.js";

const columnsRouter =  express.Router();
columnsRouter.use(auth)
columnsRouter.get("/", getAllColumns)
columnsRouter.get("/:columnId", getColumn)
columnsRouter.post("/", validateBody(columnSchema), createColumn)
columnsRouter.delete("/:columnId", deleteColumn)
columnsRouter.put("/:columnId", validateBody(columnSchema), updateColumn)



export default columnsRouter