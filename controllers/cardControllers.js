import Cards from "../models/cardSchema.js";

export const addCard = async (req, res, next) => {
  try {
    const { _id } = req.params;
    res.status(201).send(_id);
  } catch (error) {
    next(error);
  }
};
