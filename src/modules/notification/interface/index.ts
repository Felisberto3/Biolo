import { Notification } from "@prisma/client"

interface IcreateNotificationDto {
    type: string,
    notifiedBy: number,
    recipientId: number
}

interface INotificationRepositoryDto {
    create({ notifiedBy, recipientId, type }: IcreateNotificationDto): Promise<Notification>
    findById(id: number): Promise<Notification | null>
    delete(id: number): Promise<boolean>
}

export { IcreateNotificationDto, INotificationRepositoryDto  }