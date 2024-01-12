import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request,Response } from "express";
import { tokenService } from "../../../../services/tokenServices";
import { ValidateAuthUserData } from "../../../../services/verifyDataServices";


class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(req:Request, res:Response) {
        const { email, password } = req.body

        ValidateAuthUserData(email,password)
            
        const newUser = await this.createUserUseCase.execute(email,password)
         

       const token = tokenService(email, newUser.id)

       return res.status(201).json({
            newUser,
            token
       })
    }
}

export  { CreateUserController }