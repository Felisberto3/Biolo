import { Request,Response } from "express";
import { DeleteDealingUseCase } from "./DeleteDealingUseCase";


class DeleteDealingController {
    constructor(private deleteDealingUseCase: DeleteDealingUseCase) { }

    async handle(req:Request, res:Response) {
        const { id } = req.params 
        const { userId } = req.currenUser
        if (! Number(id)) 
            throw new Error("Dealing id not provided");

            
       const ya =  await this.deleteDealingUseCase.execute(Number(id), userId)

       return res.status(201).json(ya)
    }
}

export  { DeleteDealingController }