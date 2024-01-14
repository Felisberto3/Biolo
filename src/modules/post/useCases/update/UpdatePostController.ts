import { Request, Response } from "express";
import { UpdatePostUseCase } from "./UpdatePostUseCase";



class UpdatePotController {
    constructor(private updatePotUseCase: UpdatePostUseCase) { }

    async handle(req: Request, res: Response) {
        let {
            authorId,
            category,
            description,
            id,
            imagePath,
            stage,
            title } = req.body
            
        const { userId } = req.currenUser

        authorId = userId

        const newPost = await this.updatePotUseCase.execute({
            authorId,
            category,
            description,
            id,
            imagePath,
            stage,
            title
        })


        return res.status(202).json(newPost)
    }
}

export { UpdatePotController } 