import { Notification, User } from "@prisma/client";
import { prisma } from "../../../prisma";
import { INotificationRepositoryDto, IcreateNotificationDto } from "../interface";

class NotificationRepository implements INotificationRepositoryDto {
    constructor() { }

    async create({ notifiedBy,recipientId,type,postId  }: IcreateNotificationDto): Promise<Notification> {
        return await prisma.notification.create({ data: { notifiedBy,type,recipientId, postId } })
    }

    async findByUserId(recipientId: number): Promise<Notification[] | null> {
        if (!recipientId) return null

        return await prisma.notification.findMany({ where: { recipientId }})
    }
}



export { NotificationRepository }  