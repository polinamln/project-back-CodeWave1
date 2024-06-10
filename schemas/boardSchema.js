import Joi from "joi";

export const boardSchema = Joi.object({
title: Joi.string().required().messages({
    'string.empty': '"title" cannot be an empty field',
    'any.required': 'the required "title" field is missing',
  }),
icon: Joi.string().messages({
  'string.empty': '"icon" cannot be an empty field'
}),
background: Joi.string().messages({
  'string.empty': '"background" cannot be an empty field'
})
})