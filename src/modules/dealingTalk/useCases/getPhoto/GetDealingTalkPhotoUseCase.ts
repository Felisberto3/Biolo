import { DealingTalkRepository } from "../../repository/DealingRepository"

class GetDealingTalkPhotoUseCase {
    constructor(private dealingTalkRepository: DealingTalkRepository) { }

    async execute(id:number) {

        return await this.dealingTalkRepository.findById(id)

    }
}

export  { GetDealingTalkPhotoUseCase }