import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";
import Cards from "../models/cardSchema.js";
import Column from "../models/columnsSchema.js";

export const addCard = ctrlWrapper(async (req, res) => {
  const { title, description, priority, deadline, columnId, board } = req.body;
  const card = {
    title: title,
    description: description,
    priority: priority,
    deadline: deadline,
    column: columnId,
    board: board,
  };

  const column = await Column.findById(columnId);
  if (!column) throw HttpError(404);

  console.log(columnId);

  const result = await Cards.create(card);

  res.status(201).send(result);
});

export const updateCard = ctrlWrapper(async (req, res) => {
  const { cardId } = req.params;
  const newCard = req.body;

  const result = await Cards.findByIdAndUpdate(cardId, newCard, { new: true });
  if (!result) throw HttpError(404);

  res.send(result);
});

export const deleteCard = ctrlWrapper(async (req, res) => {
  const { cardId } = req.params;

  const result = await Cards.findByIdAndDelete(cardId);
  if (!result) throw HttpError(404);

  res.send({ message: "Card deleted successfully" });
});
