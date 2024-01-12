import { Request,Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";
import { ValidateAuthUserData } from "../../../../services/verifyDataServices";


class AuthUserController {
    constructor(private authUserUseCase: AuthUserUseCase) { }

    async handle(req:Request, res:Response) {
        const { email, password } = req.body

        ValidateAuthUserData(email,password)
            
        const payLoad = await this.authUserUseCase.execute(email,password)
         
       return res.status(201).json(payLoad)   
}
}
export  { AuthUserController }