import { Request,Response } from "express";
import { CreateFollowerUseCase } from "./CreateFollowerUseCase";


class CreateFollowerController {
    constructor(private createFollowerUseCase: CreateFollowerUseCase) { }

    async handle(req:Request, res:Response) {
        const { followedId } = req.body

        const { userId: followerId } = req.currenUser

        const newFollower = await this.createFollowerUseCase.execute({ followedId, followerId})
         
       return res.status(201).json(newFollower)
    }
}

export  { CreateFollowerController }