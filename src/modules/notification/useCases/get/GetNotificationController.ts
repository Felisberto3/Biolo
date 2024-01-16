import { Request,Response } from "express";
import { GetNotificationCase } from "./GetNotificationCase";

class GetNotificationController {
    constructor(private getNotificationCase: GetNotificationCase) { }

    async handle(req:Request, res:Response) {
        const { userId } = req.currenUser

        const Notifications = await this.getNotificationCase.execute(userId)

        
       return res.status(201).json(Notifications)
    }
}

export  { GetNotificationController }