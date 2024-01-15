import { DealingRepository } from "../../repository/DealingRepository"

class DeleteDealingUseCase {
    constructor(
        private dealingRepository: DealingRepository,
    ) { }

    async execute(id: number, userId: number) {

        const dealingExist = await this.dealingRepository.findById(id)

        if (!dealingExist)
            throw new Error("Dealing id not exist");

        if (dealingExist.buyerId === userId || dealingExist.posterId === userId)
            return await this.dealingRepository.delete(id)

        throw new Error("You are not allowed to delete this dealing");

    }
}

export { DeleteDealingUseCase }