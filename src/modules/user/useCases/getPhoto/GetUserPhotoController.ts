import { Request,Response } from "express";
import { GetUserPhotoUseCase } from "./GetUserPhotoUseCase";


class GetUserPhotoController {
    constructor(private getUserPhotoUseCase: GetUserPhotoUseCase) { }

    async handle(req:Request, res:Response) {
        const { id } = req.params

        const users = await this.getUserPhotoUseCase.execute(Number(id))

        if (!users?.imagePath) {
            return res.status(200).json({ "message": "there is not User photo yet"})
        }
        
        const imgPath = users?.imagePath

         return  res.status(200).sendFile(imgPath!) 
    }
}

export  { GetUserPhotoController }