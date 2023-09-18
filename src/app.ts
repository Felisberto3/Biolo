import express  from "express";
import cors  from "cors";
import * as dotenv  from "dotenv";
import { userRouter } from "./routes/user.routes";
dotenv.config()

const app = express()

app.use(cors)
app.use(express.json())

app.use(userRouter)

export { app }