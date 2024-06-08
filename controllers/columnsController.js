import { columSchema } from "../schemas/columnSchemas.js";
import Board from "../models/boardSchema.js";
import Column from "../models/columnsSchema.js";
import  HttpError  from "../helpers/HttpError.js";
export const getAllColumns = async (req, res, next) => {
try {
    const column = await Column.find(req.column)
    res.status(200).json({ column });
} catch (e) {
    next(e)
}
    
}
export const getColumn = async (req, res, next) => {
    const { id } = req.params
    if(!id) throw HttpError(401);
    try {
       const column = await Column.findOne({_id: id, owner: req.user.id})
       
       if (!column) throw HttpError(404)
        res.status(200).json({ column })
       
    } catch (e) {
        next(e)
    }
}
export const createColumn = async (req, res, next) => {
    try {
        const { id } = req.params
        if (!id) throw HttpError(404, 'Board not found')
        const createColumn = {
            title: req.body.title,
            board: id,
            owner: req.user.id
        }
        const columnSchema = columSchema.validate(createColumn)
        if (!columnSchema) throw HttpError(400)
        const newColumn = await Column.create(createColumn);
        res.status(201).json({ column: newColumn })
    } catch (e) {
       next(e) 
    }
}

export const deleteColumn = async (req, res, next) => {
    const { id } = req.params
    try {
      const deleteColumn = await Column.findByIdAndDelete(id)  
      if (deleteColumn === null) throw HttpError(404)
      if(deleteColumn.id === id)
        res.status(201).json({ column: deleteColumn })
    } catch (e) {
       next(e) 
    }
}

export const updateColumn = async (req, res, next) => {
    const { id } = req.params
    const newColumn = req.body
    if (Object.keys(newColumn).length === 0) {
        throw HttpError(400, "Body must have at least one field")
    }
    try {
        const columnSchema = columSchema.validate(newColumn)
        if (!columnSchema) throw HttpError(400)
      const updateColumn = await Column.findByIdAndUpdate(
        id,
         newColumn,
         {new: true}
        )
      if (!updateColumn) throw HttpError(404)
        res.status(200).json({ column: updateColumn }) 
    } catch (e) {
        next(e)
    }
}