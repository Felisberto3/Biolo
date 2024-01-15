import { IcreateDealingDto } from "../../interface";
import { DealingRepository } from "../../repository/DealingRepository";

class CreateDealingUseCase {
    constructor(private dealingRepository: DealingRepository ) { }

    async execute({ bioloId,buyerId,posterId }:IcreateDealingDto) {

        return await this.dealingRepository.create({ bioloId,buyerId, posterId })

    }
}

export  { CreateDealingUseCase }