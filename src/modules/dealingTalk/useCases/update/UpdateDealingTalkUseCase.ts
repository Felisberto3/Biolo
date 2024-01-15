import { IUpdateDealingTalkDto } from "../../interface"
import { DealingTalkRepository } from "../../repository/DealingRepository"

class UpdateDealingTalkUseCase {
    constructor(private dealingTalkRepository: DealingTalkRepository) { }

    async execute({ content, id,imagePath,userId }:IUpdateDealingTalkDto ) {
        const theDealingTalk = await this.dealingTalkRepository.findById(id)

        if (theDealingTalk?.righterId !== userId) 
            throw new Error("You may not update this content. It is not your message");

        return this.dealingTalkRepository.update({ content, id, imagePath })
    }
}

export  { UpdateDealingTalkUseCase }