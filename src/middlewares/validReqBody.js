import joi from "joi";

import bodySchema from "../schemas/bodySchema.js";

export default async function validBody(req, res, next) {
  try {
    const bodyValidation = await bodySchema.validateAsync(req.body);
    res.locals.body = bodyValidation;
  } catch (error) {
    return res.status(422).send(error.message);
  }

  next();
}
