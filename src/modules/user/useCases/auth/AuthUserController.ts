import { Request,Response } from "express";
import * as Yup from "yup";
import { tokenService } from "../../../../services/tokenServices";
import { AuthUserUseCase } from "./AuthUserUseCase";


class AuthUserController {
    constructor(private authUserUseCase: AuthUserUseCase) { }

    async handle(req:Request, res:Response) {
        const { email, password } = req.body

        // const userSchema = Yup.object({
        //     email:Yup.string().trim().email('E-mail invalid!').required('email is required!'),
        //     password:Yup.string().trim().required('email is required')
        // })

        // if (userSchema.validateSync({ email, password}, { abortEarly: false })) {
        //     throw new Error(" Email or Password Invalid");
        // }
            
        const payLoad = await this.authUserUseCase.execute(email,password)
         
       return res.status(201).json(payLoad)   
}
}
export  { AuthUserController }