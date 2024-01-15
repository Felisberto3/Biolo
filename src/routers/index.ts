import { Router } from "express";
import { userRouter } from "./user.router";
import { postRouter } from "./post.router";
import { dealingRouter } from "./dealing.router";
import { dealingTalkRouter } from "./dealingTalk.router";

const router = Router()

router.use(userRouter)
router.use(postRouter)
router.use(dealingRouter)
router.use(dealingTalkRouter)

export { router }