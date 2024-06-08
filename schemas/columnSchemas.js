import Joi from "joi";

export const columSchema = Joi.object({
    title: Joi.string().required()
})
