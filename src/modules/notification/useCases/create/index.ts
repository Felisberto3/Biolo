import { NotificationRepository } from "../../repository/NotificationRepository"
import { CreateNotificationController } from "./CreateNotificationController"
import { CreateNotificationUseCase } from "./CreateNotificationUseCase"


const notificationRepository = new NotificationRepository()
const createNotificationUseCase = new CreateNotificationUseCase(notificationRepository)
const createNotification = new CreateNotificationController(createNotificationUseCase)

export { createNotification }