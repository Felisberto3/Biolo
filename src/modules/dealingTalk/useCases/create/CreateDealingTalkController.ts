import { Request,Response } from "express";
import { CreateDealingTalkUseCase } from "./CreateDealingTalktUseCase";


class CreateDealingTalkController {
    constructor(private createDealingTalkUseCase: CreateDealingTalkUseCase) { }

    async handle(req:Request, res:Response) {
        const { content, dealingId } = req.body

        const { userId: righterId } = req.currenUser

        const newDealingTalk = await this.createDealingTalkUseCase.execute({ content,dealingId,righterId})
         
       return res.status(201).json(newDealingTalk)
    }
}

export  { CreateDealingTalkController }