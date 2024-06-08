import Joi from "joi";

export const columnSchema = Joi.object({
    title: Joi.string().required()
})
