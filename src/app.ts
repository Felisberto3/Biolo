import express  from "express";
import cors  from "cors";
import * as dotenv  from "dotenv";
dotenv.config()

const app = express()

app.use(cors)
app.use(express.json())

export { app }