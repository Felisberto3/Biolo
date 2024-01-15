import { DealingTalkRepository } from "../../repository/DealingRepository"
import { GetDealingTalkUseCase } from "./GetDealingTalkCase"
import { GetDealingTalkController } from "./GetDealingTalkController"




const dealingTalkRepository = new DealingTalkRepository()
const getDealingTalkUseCase = new GetDealingTalkUseCase(dealingTalkRepository)
const getDealingTalk = new GetDealingTalkController(getDealingTalkUseCase)

export { getDealingTalk }