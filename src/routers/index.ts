import { Router } from "express";
import { userRouter } from "./user.router";

const router = Router()

router.use(userRouter)

export { router }