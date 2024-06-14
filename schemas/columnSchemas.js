import Joi from "joi";

export const columnCreateSchema = Joi.object({
    title: Joi.string().required().messages({
        'string empty': '"title" cannot be an empty field',
        'any.required': 'the required "title" field is missing',
      }),
    boardId: Joi.string().required().messages({
        'string.empty': '"boardId" cannot be an empty field',
        'any.required': 'the required "boardId" field is missing',
      }),
})

export const columnUpdateSchema = Joi.object({
  title: Joi.string().messages({
      'string empty': '"title" cannot be an empty field',
    }),
})