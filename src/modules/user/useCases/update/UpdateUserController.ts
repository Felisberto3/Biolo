import { Request,Response } from "express";
import * as Yup from "yup";
import { tokenService } from "../../../../services/tokenServices";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { hash } from "bcryptjs";
import { ValidateUpdateUserData } from "../../../../services/verifyDataServices";


class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) { }

    async handle(req:Request, res:Response) {
        const { firstName,lastName,bornDate, password,imagePath } = req.body
        const { userId } = req.currenUser

        ValidateUpdateUserData({ firstName,lastName,bornDate, password,imagePath })

        let passwordHash = ''

        if (password) 
             passwordHash = await hash(password, 8)
            
        const newUser = await this.updateUserUseCase.execute({ firstName,lastName,bornDate,imagePath, passwordHash, id:userId })
        
        return res.status(202).json(newUser)
    }
}

export  { UpdateUserController }