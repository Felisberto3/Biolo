import { Request,Response } from "express";
import { GetDealingTalkUseCase } from "./GetDealingTalkCase";



class GetDealingTalkController {
    constructor(private getDealingTalkUseCase: GetDealingTalkUseCase) { }

    async handle(req:Request, res:Response) {
        const { id } = req.params

        const DealingTalks = await this.getDealingTalkUseCase.execute(Number(id))

       return res.status(201).json(DealingTalks)
    }
}

export  { GetDealingTalkController }