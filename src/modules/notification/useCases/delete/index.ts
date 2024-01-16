import { DealingRepository } from "../../repository/DealingRepository"
import { DeleteDealingController } from "./DeleteDealingController"
import { DeleteDealingUseCase } from "./DeleteDealingUseCase"


const dealingRepository = new DealingRepository()
const deleteDealingUseCase = new DeleteDealingUseCase(dealingRepository)
const deleteDealing = new DeleteDealingController(deleteDealingUseCase)

export { deleteDealing }