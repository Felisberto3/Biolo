import { Request,Response } from "express";
import { GetFollowerUseCase } from "./GetFollowerCase";



class GetFollowerController {
    constructor(private getFollowerUseCase: GetFollowerUseCase) { }

    async handle(req:Request, res:Response) {
        const { id } = req.params
        

        const followers = await this.getFollowerUseCase.execute(Number(id))

       return res.status(201).json(followers)
    }
}

export  { GetFollowerController }