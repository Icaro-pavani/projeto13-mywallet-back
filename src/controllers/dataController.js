import joi from "joi";
import dayjs from "dayjs";

import db from "../db.js";

export async function addNewEntry(req, res) {
  try {
    const { user, body } = res.locals;
    const { value, description, type } = body;

    await db.collection("data").insertOne({
      value,
      description,
      type,
      date: dayjs().format("DD/MM"),
      userId: user._id,
    });

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
