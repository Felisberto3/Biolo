import { Router } from "express";
import { userRouter } from "./user.router";
import { postRouter } from "./post.router";

const router = Router()

router.use(userRouter)
router.use(postRouter)

export { router }