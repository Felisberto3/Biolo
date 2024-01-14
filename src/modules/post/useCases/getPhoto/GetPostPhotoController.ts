import { Request,Response } from "express";
import { GetPostPhotoUseCase } from "./GetPostPhotoUseCase";


class GetPostPhotoController {
    constructor(private getPostPhotoUseCase: GetPostPhotoUseCase) { }

    async handle(req:Request, res:Response) {
        const { id } = req.params

        const Post = await this.getPostPhotoUseCase.execute(Number(id))
        
        const imgPath = Post?.imagePath

         return  res.status(200).sendFile(imgPath!) 
    }
}

export  { GetPostPhotoController }