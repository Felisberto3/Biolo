import { createUserShema } from "src/shema/createUserSchema";
import { CreateUserCase } from "./createUserCase";
import { Response, Request  } from "express";

class CreateUserController {
    constructor(private createUserCase: CreateUserCase){}

   async handle(req: Request, res: Response ) {
    const {first_name, last_name, email, password } = req.body

    if (!(await createUserShema.isValid({
        first_name, 
        last_name, 
        email, 
        password 
    }))) {
        throw new Error('Dados invalidos!')
    }

    const Usuario = this.createUserCase.execute({ first_name, last_name, email, password })

    return res.status(201).json(Usuario)
   }
}

export { CreateUserController }