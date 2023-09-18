import { NextFunction,Request,Response,  Router } from "express";
import { confirmUserController } from "src/modules/user/userCases/confirmUser";
import { createUserController } from "src/modules/user/userCases/createUser";

const router = Router()

router.post('/signup', (req: Request, res: Response ,next: NextFunction) => {
    return createUserController.handle(req,res)
})

router.post('/signup/confirm', (req: Request, res: Response ,next: NextFunction) => {
    return confirmUserController.handle(req,res)
})


export { router as userRouter }

