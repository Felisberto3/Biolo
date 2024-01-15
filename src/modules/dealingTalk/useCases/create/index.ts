import { DealingTalkRepository } from "../../repository/DealingRepository"
import { CreateDealingTalkController } from "./CreateDealingTalkController"
import { CreateDealingTalkUseCase } from "./CreateDealingTalktUseCase"


const dealingTalkRepository = new DealingTalkRepository()
const createDealingTalkUseCase = new CreateDealingTalkUseCase(dealingTalkRepository)
const createDealingTalk = new CreateDealingTalkController(createDealingTalkUseCase)

export { createDealingTalk }