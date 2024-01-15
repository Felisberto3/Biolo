import { Request,Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";


class CreatePostController {
    constructor(private createPostUseCase: CreatePostUseCase) { }

    async handle(req:Request, res:Response) {
        const { authorId,category,description,stage,title } = req.body

        const newPost = await this.createPostUseCase.execute({ authorId,category,description,stage,title})
         
       return res.status(201).json(newPost)
    }
}

export  { CreatePostController }