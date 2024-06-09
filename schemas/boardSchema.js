import Joi from "joi";

export const boardSchema = Joi.object({
title: Joi.string().required().messages({
    'string.empty': '"title" cannot be an empty field',
    'any.required': 'the required "title" field is missing',
  })
})