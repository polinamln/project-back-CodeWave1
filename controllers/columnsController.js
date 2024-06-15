
import Card from "../models/cardSchema.js";
import Column from "../models/columnsSchema.js";
import  HttpError  from "../helpers/HttpError.js";

export const getAllColumns = async (req, res, next) => {
     const boardId = req.query.boardId;
try {
    const columns = await Column.find({owner: req.user.id, board: boardId})
    res.json({ columns });
} catch (e) {
    next(e)
}
    
}
export const getColumn = async (req, res, next) => {
    const { columnId } = req.params
    if(!columnId) throw HttpError(404);
    try {
       const column = await Column.findOne({_id: columnId, owner: req.user.id});
       
       if (!column) throw HttpError(404);
        res.json({ column });
       
    } catch (e) {
        next(e)
    }
}
export const createColumn = async (req, res, next) => {
    try {
        const { boardId, title } = req.body;
        if (!boardId) throw HttpError(404, 'Board not found');
        const createColumn = {
            title: title,
            board: boardId,
            owner: req.user.id
        }
        const newColumn = await Column.create(createColumn);
        res.status(201).json({ column: newColumn });
    } catch (e) {
       next(e) 
    }
}

export const deleteColumn = async (req, res, next) => {
    const { columnId } = req.params;
    try {
      const deleteColumn = await Column.findByIdAndDelete(columnId);
      if (deleteColumn === null) throw HttpError(404);
      await Card.deleteMany({ column: columnId});
        res.json({ message: "Column deleted successfully" });
    } catch (e) {
       next(e) 
    }
}

export const updateColumn = async (req, res, next) => {
    const { columnId } = req.params
    const newColumn = req.body
    try {
      const updateColumn = await Column.findByIdAndUpdate(
        columnId,
         newColumn,
         {new: true}
        )
      if (!updateColumn) throw HttpError(404);
        res.json({ column: updateColumn }); 
    } catch (e) {
        next(e)
    }
}
