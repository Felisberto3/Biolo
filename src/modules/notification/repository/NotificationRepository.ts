import { Notification, User } from "@prisma/client";
import { prisma } from "../../../prisma";
import { INotificationRepositoryDto, IcreateNotificationDto } from "../interface";

class NotificationRepository implements INotificationRepositoryDto {
    constructor() { }

    async create({ notifiedBy,recipientId,type  }: IcreateNotificationDto): Promise<Notification> {
        return await prisma.notification.create({ data: { notifiedBy,type,recipientId } })
    }

    async findById(id: number): Promise<Notification | null> {
        if (!id) return null
        return await prisma.notification.findFirst({
            where: { id }
        })
    }

    async findAll(){
        return await prisma.notification.findMany()
    }

    async delete(id: number): Promise<boolean> {
        await prisma.notification.delete({ where:  {id} })

        return true
    }
}



export { NotificationRepository } 