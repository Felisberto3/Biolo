import { DealingRepository } from "../../../dealing/repository/DealingRepository"
import { NotificationRepository } from "../../../notification/repository/NotificationRepository"
import { DealingTalkRepository } from "../../repository/DealingRepository"
import { CreateDealingTalkController } from "./CreateDealingTalkController"
import { CreateDealingTalkUseCase } from "./CreateDealingTalktUseCase"

const dealingRepository= new DealingRepository()
const notificationRepository= new NotificationRepository()

const dealingTalkRepository = new DealingTalkRepository()
const createDealingTalkUseCase = new CreateDealingTalkUseCase(dealingTalkRepository,dealingRepository,notificationRepository)
const createDealingTalk = new CreateDealingTalkController(createDealingTalkUseCase)

export { createDealingTalk }