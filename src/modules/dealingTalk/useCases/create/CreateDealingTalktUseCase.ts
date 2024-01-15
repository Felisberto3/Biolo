import { IcreateDealingTalkDto } from "../../interface";
import { DealingTalkRepository } from "../../repository/DealingRepository";

class CreateDealingTalkUseCase {
    constructor(private dealingTalkRepository: DealingTalkRepository ) { }

    async execute({ content,dealingId,righterId}:IcreateDealingTalkDto) {

        return await this.dealingTalkRepository.create({ content, dealingId, righterId})

    }
}

export  { CreateDealingTalkUseCase }