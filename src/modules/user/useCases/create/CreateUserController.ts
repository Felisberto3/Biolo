import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request,Response } from "express";
import * as Yup from "yup";
import { tokenService } from "../../../../services/tokenServices";


class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(req:Request, res:Response) {
        const { email, password } = req.body

        // const userSchema = Yup.object({
        //     email:Yup.string().trim().email('E-mail invalid!').required('email is required!'),
        //     password:Yup.string().trim().required('email is required')
        // })

        // if (userSchema.validateSync({ email, password}, { abortEarly: false })) {
        //     throw new Error(" Email or Password Invalid");
        // }
            
        const newUser = await this.createUserUseCase.execute(email,password)
         

       const token = await tokenService(email, newUser.id)

       return res.status(201).json({
            newUser,
            token
       })
    }
}

export  { CreateUserController }