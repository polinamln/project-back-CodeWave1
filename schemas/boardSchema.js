import Joi from "joi";

export const createBoard = Joi.object({
title: Joi.title().required(),
})