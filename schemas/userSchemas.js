import Joi from "joi";

export const createUserSchema = Joi.object({
  userName: Joi.string().required(),
  email: Joi.required(),
  password: Joi.required(),
  avatarURL: Joi.optional(),
});

export const loginUserSchema = Joi.object({
  email: Joi.required(),
  password: Joi.required(),
});
