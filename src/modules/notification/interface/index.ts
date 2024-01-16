import { Notification } from "@prisma/client"

interface IcreateNotificationDto {
    type: string,
    notifiedBy: number,
    recipientId: number
}

interface INotificationRepositoryDto {
    create({ notifiedBy, recipientId, type }: IcreateNotificationDto): Promise<Notification>
    findByUserId(id: number): Promise<Notification | null>
}

export { IcreateNotificationDto, INotificationRepositoryDto  }