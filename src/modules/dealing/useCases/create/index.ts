import { NotificationRepository } from "../../../notification/repository/NotificationRepository"
import { DealingRepository } from "../../repository/DealingRepository"
import { CreateDealingController } from "./CreateDealingController"
import { CreateDealingUseCase } from "./CreateDealingUseCase"

const notificationRepository=  new NotificationRepository()
const dealingRepository = new DealingRepository()
const createDealingUseCase = new CreateDealingUseCase(dealingRepository,notificationRepository)
const createDealing = new CreateDealingController(createDealingUseCase)

export { createDealing }