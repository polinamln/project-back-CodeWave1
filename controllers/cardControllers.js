import Cards from "../models/cardSchema.js";

export const addCard = async (req, res, next) => {
  try {
    console.log(req);
    //  const newCard = new Cards({ ...req.body, column: req.params.columnId});
    //  await n
    res.status(201).send("Sucses");
  } catch (error) {
    next(error);
  }
};
