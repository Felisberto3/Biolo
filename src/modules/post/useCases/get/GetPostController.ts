import { Request,Response } from "express";
import { GetPostUseCase } from "./GetPostCase";



class GetPostController {
    constructor(private getPostUseCase: GetPostUseCase) { }

    async handle(req:Request, res:Response) {
        const { id } = req.params

        const Posts = await this.getPostUseCase.execute(Number(id))

       return res.status(201).json(Posts)
    }
}

export  { GetPostController }