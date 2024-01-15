import { DealingTalkRepository } from "../../repository/DealingRepository"
import { DeleteDealingTalkController } from "./DeleteDealingTalkController"
import { DeleteDealingTalkUseCase } from "./DeleteDealingTalkUseCase"



const dealingTalkRepository = new DealingTalkRepository()
const deleteDealingTalkUseCase = new DeleteDealingTalkUseCase(dealingTalkRepository)
const deleteDealingTalk = new DeleteDealingTalkController(deleteDealingTalkUseCase)

export { deleteDealingTalk }