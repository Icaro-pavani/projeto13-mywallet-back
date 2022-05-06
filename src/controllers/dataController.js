import joi from "joi";
import dayjs from "dayjs";

import db from "../db.js";

export async function addNewEntry(req, res) {
  try {
    const { authorization } = req.headers;
    const { value, description, type } = req.body;
    const token = authorization.replace("Bearer ", "").trim();
    const user = await db.collection("sessions").findOne({ token });

    if (!user) {
      return res.status(422).send("Não existe um usuário para este token!");
    }

    await db.collection("data").insertOne({
      value,
      description,
      type,
      date: dayjs().format("DD/MM"),
      userId: user.userId,
    });

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    if (error.isJoi === true) {
      return res.status(422).send(error.message);
    }
    res.sendStatus(500);
  }
}
