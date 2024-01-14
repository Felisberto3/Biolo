import { Request,Response } from "express";
import { DeletePostUseCase } from "./DeletePostUseCase";


class DeletePostController {
    constructor(private deletePostUseCase: DeletePostUseCase) { }

    async handle(req:Request, res:Response) {
        const { id } = req.params
        if (! Number(id)) 
            throw new Error("Post id not provided");

            
       const ya =  await this.deletePostUseCase.execute(Number(id))

       return res.status(201).json(ya)
    }
}

export  { DeletePostController }