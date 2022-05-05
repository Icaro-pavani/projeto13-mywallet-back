import joi from "joi";
import bcrypt from "bcrypt";

import db from "./../db.js";

export async function signUpUser(req, res) {
  try {
    const signUpSchema = joi
      .object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
        repeat_password: joi.ref("password"),
      })
      .with("password", "repeat_password");
    const userInfoValidation = await signUpSchema.validateAsync(req.body);
    const passwordHash = bcrypt.hashSync(userInfoValidation.password, 10);
    delete userInfoValidation.repeat_password;
    await db
      .collection("users")
      .insertOne({ ...userInfoValidation, password: passwordHash });
    res.sendStatus(201);
  } catch (error) {
    if (error.isJoi === true) {
      return res.status(422).send(error.message);
    }
    console.log("Houve um erro!", error);
    res.sendStatus(500);
  }
}
