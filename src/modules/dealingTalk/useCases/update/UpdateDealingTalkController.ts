import { Request, Response } from "express";
import { UpdateDealingTalkUseCase } from "./UpdateDealingTalkUseCase";



class UpdateDealingTalkController {
    constructor(private updateDealingTalkUseCase: UpdateDealingTalkUseCase) { }

    async handle(req: Request, res: Response) {
        let { content } = req.body

        let { id } = req.params

        const { userId } = req.currenUser

        let imagePath = ''
        if (req.file)
            imagePath = req.file.path

        const newPost = await this.updateDealingTalkUseCase.execute({ id: Number(id), imagePath, userId, content })


        return res.status(202).json(newPost)
    }
}

export { UpdateDealingTalkController } 