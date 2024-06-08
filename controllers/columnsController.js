import { columnSchema } from "../schemas/columnSchemas.js";
// import Board from "../models/boardSchema.js";
// import Card from "../models/cardSchema.js";
import Column from "../models/columnsSchema.js";
import  HttpError  from "../helpers/HttpError.js";
export const getAllColumns = async (req, res, next) => {
try {
    const columns = await Column.find({owner: req.user.id})
    res.json({ columns });
} catch (e) {
    next(e)
}
    
}
export const getColumn = async (req, res, next) => {
    const { id } = req.params
    if(!id) throw HttpError(404);
    try {
       const column = await Column.findOne({_id: id, owner: req.user.id});
       
       if (!column) throw HttpError(404);
        res.json({ column });
       
    } catch (e) {
        next(e)
    }
}
export const createColumn = async (req, res, next) => {
    try {
        const { id, title } = req.body;
        if (!id) throw HttpError(404, 'Board not found');
        const createColumn = {
            title: title,
            board: id,
            owner: req.user.id
        }
        const columnValidate = columnSchema.validate(createColumn);
        if (!columnValidate) throw HttpError(400);
        const newColumn = await Column.create(createColumn);
        res.status(201).json({ column: newColumn });
    } catch (e) {
       next(e) 
    }
}

export const deleteColumn = async (req, res, next) => {
    const { id } = req.params;
    try {
      const deleteColumn = await Column.findByIdAndDelete(id);
    //   const deleteAllCards = await Card.deleteMany({ column: id});
      if (deleteColumn === null) throw HttpError(404);
        res.json({ message: "Column deleted successfully" });
    } catch (e) {
       next(e) 
    }
}

export const updateColumn = async (req, res, next) => {
    const { id } = req.params
    const newColumn = req.body
    try {
        const columnValidate = columnSchema.validate(newColumn);
        if (!columnValidate) throw HttpError(400);
      const updateColumn = await Column.findByIdAndUpdate(
        id,
         newColumn,
         {new: true}
        )
      if (!updateColumn) throw HttpError(404);
        res.json({ column: updateColumn }); 
    } catch (e) {
        next(e)
    }
}