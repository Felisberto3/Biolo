import { Request, Response } from "express";
import { UpdatePostUseCase } from "./UpdatePostUseCase";



class UpdatePotController {
    constructor(private updatePotUseCase: UpdatePostUseCase) { }

    async handle(req: Request, res: Response) {
        let {
            authorId,
            category,
            description,
            stage,
            title } = req.body

        let { id } = req.params
            
        const { userId } = req.currenUser

        authorId = userId 

        let imagePath = ''
        if (req.file) 
             imagePath= req.file.path

        const newPost = await this.updatePotUseCase.execute({ 
            authorId,
            category,
            description,
            id: Number(id),
            imagePath,
            stage,
            title
        })


        return res.status(202).json(newPost)
    }
}

export { UpdatePotController } 