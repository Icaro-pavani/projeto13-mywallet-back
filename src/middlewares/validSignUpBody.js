import signUpSchema from "../schemas/signUpSchema.js";

export default async function validSignUpBody(req, res, next) {
  try {
    const userInfoValidation = await signUpSchema.validateAsync(req.body);
    res.locals.body = userInfoValidation;
  } catch (error) {
    console.log(error);
    return res.status(422).send(error.message);
  }

  next();
}
