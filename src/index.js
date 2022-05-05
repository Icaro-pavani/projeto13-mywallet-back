import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => console.log("Servidor Online!!!!"));
