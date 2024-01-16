import { NotificationRepository } from "../../repository/NotificationRepository";
import { GetNotificationCase } from "./GetNotificationCase";
import { GetNotificationController } from "./GetNotificationController";


const notificationRepository = new NotificationRepository()
const getNotificationUseCase = new GetNotificationCase(notificationRepository)
const getNotification = new GetNotificationController(getNotificationUseCase)

export { getNotification }