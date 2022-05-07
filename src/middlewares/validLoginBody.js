import loginSchema from "../schemas/loginSchema.js";

export default async function validLoginBody(req, res, next) {
  try {
    const loginValidation = await loginSchema.validateAsync(req.body);
    res.locals.body = loginValidation;
  } catch (error) {
    console.log(error);
    return res.status(422).send(error.message);
  }

  next();
}
