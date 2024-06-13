import Joi from 'joi';

export const emailSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': '"email" cannot be an empty field',
    'any.required': 'the required "email" field is missing',
  }),
  comment: Joi.string().required().messages({
    'string.empty': '"comment" cannot be an empty field',
    'any.required': 'the required "comment" field is missing"',
  }),
});