import { Request,Response } from "express";
import { DeleteFollowerUseCase } from "./DeleteFollowerUseCase";


class DeleteFollowerController {
    constructor(private deleteFollowerUseCase: DeleteFollowerUseCase) { }

    async handle(req:Request, res:Response) {
        const { id } = req.params
        const { userId } = req.currenUser

        if (! Number(id)) 
            throw new Error("Follower id not provided");

            
       const ya =  await this.deleteFollowerUseCase.execute(Number(id),userId)

       return res.status(201).json(ya)
    }
}

export  { DeleteFollowerController }