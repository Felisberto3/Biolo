import { NextFunction,Request,Response,  Router } from "express";
import { createUserController } from "src/modules/user/userCases/createUser";

const router = Router()

router.post('/signin', (req: Request, res: Response ,next: NextFunction) => {
    return createUserController.handle(req,res)
})


export { router as userRouter }

