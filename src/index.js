import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./db.js";
import { signUpUser, signInUser } from "./controllers/authController.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/sign-up", signUpUser);

app.post("/sign-in", signInUser);

app.listen(process.env.PORT, () => console.log("Servidor Online!!!!"));
