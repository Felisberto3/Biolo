import { Request,Response } from "express";
import { DeleteDealingTalkUseCase } from "./DeleteDealingTalkUseCase";


class DeleteDealingTalkController {
    constructor(private deleteDealingTalkUseCase: DeleteDealingTalkUseCase) { }

    async handle(req:Request, res:Response) {
        const { id } = req.params
        const { userId } = req.currenUser

        if (! Number(id)) 
            throw new Error("DealingTalk id not provided");

            
       const deleteInfo =  await this.deleteDealingTalkUseCase.execute(Number(id),userId)

       return res.status(201).json(deleteInfo)
    }
}

export  { DeleteDealingTalkController }