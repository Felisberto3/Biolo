import { DealingRepository } from "../../repository/DealingRepository";
import { GetDealingCase } from "./GetDealingCase";
import { GetDealingController } from "./GetDealingController";


const dealingRepository = new DealingRepository()
const getDealingUseCase = new GetDealingCase(dealingRepository)
const getDealing = new GetDealingController(getDealingUseCase)

export { getDealing }