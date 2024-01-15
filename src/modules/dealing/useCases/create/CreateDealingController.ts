import { Request, Response } from "express";
import { CreateDealingUseCase } from "./CreateDealingUseCase";


class CreateDealingController {
    constructor(private createDealingUseCase: CreateDealingUseCase) { }

    async handle(req: Request, res: Response) {
        const { bioloId } = req.body

        const { userId: buyerId } = req.currenUser

        const newDealing = await this.createDealingUseCase.execute({ bioloId, buyerId })

        return res.status(201).json(newDealing)
    }
}

export { CreateDealingController }