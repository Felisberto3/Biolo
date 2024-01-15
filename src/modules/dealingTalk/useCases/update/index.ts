import { DealingTalkRepository } from "../../repository/DealingRepository"
import { UpdateDealingTalkController } from "./UpdateDealingTalkController"
import { UpdateDealingTalkUseCase } from "./UpdateDealingTalkUseCase"

const dealingTalkRepository = new DealingTalkRepository()
const updateDealingTalkUseCase = new UpdateDealingTalkUseCase(dealingTalkRepository)
const updateDealingTalk = new UpdateDealingTalkController(updateDealingTalkUseCase)

export { updateDealingTalk }