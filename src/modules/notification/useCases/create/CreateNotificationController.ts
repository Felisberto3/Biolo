import { Request, Response } from "express";
import { CreateNotificationUseCase } from "./CreateNotificationUseCase";


class CreateNotificationController {
    constructor(private createNotificationUseCase: CreateNotificationUseCase) { }

    async handle(req: Request, res: Response) {
        const { type,recipientId } = req.body

        const { userId: notifiedBy } = req.currenUser

        const newNotification = await this.createNotificationUseCase.execute({ notifiedBy,recipientId,type})

        return res.status(201).json(newNotification)
    }
}

export { CreateNotificationController }  