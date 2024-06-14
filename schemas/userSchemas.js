import Joi from "joi";

export const createUserSchema = Joi.object({
  userName: Joi.string().max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  avatarURL: Joi.string().optional(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const editUserSchema = Joi.object({
  userName: Joi.string().max(20).optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().min(6).optional(),
  avatarURL: Joi.string().optional(),
});


export const themasUserScema = Joi.object({
  thema: Joi.string().valid("dark", "light", "violet"),
})