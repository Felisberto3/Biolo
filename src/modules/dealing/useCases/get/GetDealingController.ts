import { Request,Response } from "express";
import { GetDealingCase } from "./GetDealingCase";

class GetDealingController {
    constructor(private getDealingCase: GetDealingCase) { }

    async handle(req:Request, res:Response) {
        const { id } = req.params
        

        const Dealings = await this.getDealingCase.execute(Number(id))

       return res.status(201).json(Dealings)
    }
}

export  { GetDealingController }