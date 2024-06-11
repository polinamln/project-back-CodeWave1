import Board from "../models/boardSchema.js";
import Column from "../models/columnsSchema.js";
import Card from "../models/cardSchema.js";
import HttpError from "../helpers/HttpError.js";


export const getAllBoard = async (req, res, next) => {
    try {
      const boards = await Board.find({owner: req.user.id});
     res.json({ boards });
    } catch (e) {
        next(e)
    }
}

export const getBoard = async (req, res, next) => {
    const { boardId } = req.params;
    if(!boardId) throw HttpError(404);
    try {
        const board = await Board.findOne({_id: boardId, owner: req.user.id});
        if(!board) throw HttpError(404);
            res.json({ board });
    } catch (e) {
        next(e)
    }
}

export const createBoard = async (req, res, next) => {
    const createBoard = {
        title: req.body.title,
        icon: req.body.icon,
        background: req.body.background,
        owner: req.user.id
    }
    try {
      const newBoard = await Board.create(createBoard);
      res.status(201).json({ board: newBoard });
    } catch (e) {
      next(e)  
    }
}

export const deleteBoard = async (req, res, next) => {
    const { boardId } = req.params;
    try {
        const deleteBoard = await Board.findByIdAndDelete(boardId);
        if(deleteBoard === null) throw HttpError(404);
        await Column.deleteMany({ board: boardId});
         await Card.deleteMany({ board: boardId})
         res.json({ message: "Board deleted successfully" });   
    } catch (e) {
        next(e)
    }
}

export const updateBoard = async (req, res, next) => {
    const { boardId } = req.params;
    const newBoard = req.body;
    try {
            const updateBoard = await Board.findByIdAndUpdate(
        boardId,
        newBoard,
        {new: true}
        )
        if (!updateBoard) throw HttpError(404);
            res.json({ board: updateBoard });
    } catch (e) {
       next(e) 
    }
}