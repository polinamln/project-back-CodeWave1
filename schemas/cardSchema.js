import Joi from "joi";

export const cardSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  priority: Joi.string().valid("Low", "Medium", "High").default("Low"),
  // deadline: Joi.date().optional(),
});