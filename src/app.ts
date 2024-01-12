import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import { router } from './routers'


const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

export { app }