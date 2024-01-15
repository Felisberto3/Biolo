import { Request,Response } from "express";
import { GetDealingTalkPhotoUseCase } from "./GetDealingTalkPhotoUseCase";


class GetDealingTalkPhotoController {
    constructor(private getDealingTalkPhotoUseCase: GetDealingTalkPhotoUseCase) { }

    async handle(req:Request, res:Response) {
        const { id } = req.params

        if (!Number(id)) {
            throw new Error("Id not provided");
            
        }
        const DealingTalk = await this.getDealingTalkPhotoUseCase.execute(Number(id))
        
        const imgPath = DealingTalk?.imagePath

         return  res.status(200).sendFile(imgPath!) 
    }
}

export  { GetDealingTalkPhotoController }