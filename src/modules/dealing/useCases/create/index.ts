import { DealingRepository } from "../../repository/DealingRepository"
import { CreateDealingController } from "./CreateDealingController"
import { CreateDealingUseCase } from "./CreateDealingUseCase"


const dealingRepository = new DealingRepository()
const createDealingUseCase = new CreateDealingUseCase(dealingRepository)
const createDealing = new CreateDealingController(createDealingUseCase)

export { createDealing }