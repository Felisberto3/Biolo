import { DealingRepository } from "../../repository/DealingRepository"

class GetDealingCase {
    constructor(private DealingRepository: DealingRepository) { }

    async execute(id:number) {

        if (!id) {
            return await this.DealingRepository.findAll()
        }
        return await this.DealingRepository.findById(id)


    }
}

export  { GetDealingCase }