import { IcreateNotificationDto } from "../../interface";
import { NotificationRepository } from "../../repository/NotificationRepository";

class CreateNotificationUseCase {
    constructor(private notificationRepository: NotificationRepository ) { }

    async execute({ notifiedBy,recipientId,type }:IcreateNotificationDto) {

        if (notifiedBy === recipientId) 
            throw new Error("You may not notify your self");
            
        return await this.notificationRepository.create({ notifiedBy,recipientId,type })

    }
}

export  { CreateNotificationUseCase }