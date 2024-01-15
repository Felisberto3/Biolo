import { DealingTalkRepository } from "../../repository/DealingRepository"
import { GetDealingTalkPhotoController } from "./GetDealingTalkPhotoController"
import { GetDealingTalkPhotoUseCase } from "./GetDealingTalkPhotoUseCase"





const dealingTalkRepository = new DealingTalkRepository()
const getDealingTalkPhotoUseCase = new GetDealingTalkPhotoUseCase(dealingTalkRepository)
const getDealingTalkPhoto = new GetDealingTalkPhotoController(getDealingTalkPhotoUseCase)

export { getDealingTalkPhoto }