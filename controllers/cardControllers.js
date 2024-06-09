import ctrlWrapper from "../helpers/ctrlWrapper.js";
import Cards from "../models/cardSchema.js";

export const addCard = ctrlWrapper(async (req, res) => {
  const { title, description, priority, deadline, columnId } = req.body;
  const card = {
    title: title,
    description: description,
    priority: priority,
    deadline: deadline,
    owner: req.user.id,
    column: columnId,
  };

  console.log(columnId);

  const result = await Cards.create(card);

  res.status(201).json(result);
});

export const updateCard = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const newCard = req.body;

  const result = await Cards.findByIdAndUpdate(id, newCard, { new: true });

  res.send(result);
});

export const deleteCard = ctrlWrapper(async (req, res) => {
  const { id } = req.params;

  const result = Cards.findByIdAndDelete(id);
  res.send({ message: "Card deleted successfully" });
});
