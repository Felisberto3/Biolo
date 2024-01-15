import { Request,Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";


class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) { }

    async handle(req:Request, res:Response) {
        const { id } = req.params
        const {userId } = req.currenUser
        if (! Number(id)) 
            throw new Error("User id not provided");

            
       const ya =  await this.deleteUserUseCase.execute(Number(id), userId)

       return res.status(201).json(ya)
    }
}

export  { DeleteUserController }