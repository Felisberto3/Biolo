import { DealingRepository } from "../../repository/DealingRepository"

class DeleteDealingUseCase {
    constructor(private dealingRepository: DealingRepository) { }

    async execute(id:number) {
        return await this.dealingRepository.delete(id)
    }
}

export  { DeleteDealingUseCase }