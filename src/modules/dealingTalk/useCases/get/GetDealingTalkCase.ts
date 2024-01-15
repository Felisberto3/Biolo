import { DealingTalkRepository } from "../../repository/DealingRepository"

class GetDealingTalkUseCase {
    constructor(private dealingTalkRepository: DealingTalkRepository) { }

    async execute(id:number) {

        if (!id) {
            return await this.dealingTalkRepository.findAll()
        }
        return await this.dealingTalkRepository.findById(id)


    }
}

export  { GetDealingTalkUseCase }