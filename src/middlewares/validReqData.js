import joi from "joi";

import tokenSchema from "../schemas/tokenSchema.js";
import bodySchema from "../schemas/bodySchema.js";

export default async function validReqData(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization.replace("Bearer ", "").trim();
  const tokenValidation = tokenSchema.validate(token);
  if (tokenValidation.error) {
    return res.status(422).send("Token não válido!");
  }

  const bodyValidation = bodySchema.validate(req.body);
  if (bodyValidation.error) {
    res.status(422).send("Body da requisição inválido!");
  }

  next();
}
