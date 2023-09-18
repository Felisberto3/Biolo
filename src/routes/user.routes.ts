import { NextFunction,Request,Response,  Router } from "express";
import { UsuarioRepository } from "src/modules/user/repository/UserRepository";
import { ConfirmUser } from "src/modules/user/userCases/confirmUser/confirmUser";
import { createUserController } from "src/modules/user/userCases/createUser";

const router = Router()

router.post('/signup', (req: Request, res: Response ,next: NextFunction) => {
    return createUserController.handle(req,res)
})

router.post('/signup/confirm', (req: Request, res: Response ,next: NextFunction) => {
    const { confirmCodeDto } = req.body
    
    const userRepository = new UsuarioRepository()

    const confirmUser = new ConfirmUser(confirmCodeDto, userRepository)
})


export { router as userRouter }

