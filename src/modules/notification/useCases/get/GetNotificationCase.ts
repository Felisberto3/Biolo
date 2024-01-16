import { NotificationRepository } from "../../repository/NotificationRepository"

class GetNotificationCase {
    constructor(private notificationRepository: NotificationRepository) { }

    async execute(userId:number) {

        return await this.notificationRepository.findByUserId(userId)


    }
}

export  { GetNotificationCase }