import Joi from "joi";

export const boardSchema = Joi.object({
title: Joi.string().required().messages({"string empty": "field cannot be an empty"}),
icon: Joi.number().default(0),
background: Joi.object()
})