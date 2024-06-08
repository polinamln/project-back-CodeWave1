import Cards from "../models/cardSchema.js";

export const addCard = async (req, res, next) => {
  const card = {
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    deadline: req.body.deadline,
  };
  try {
    const result = await Cards.create(card);

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

export const updateCard = async (req, res, next) => {
  const card = {
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    deadline: req.body.deadline,
  };
  try {
    const result = await Cards.findByIdAndUpdate(_id, card, { new: true });

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const deleteCard = async (req, res, next) => {
  const { _id } = req.params;

  try {
    const result = Cards.findByIdAndDelete(_id);
    res.send("Delete card");
  } catch (error) {
    next(error);
  }
};
