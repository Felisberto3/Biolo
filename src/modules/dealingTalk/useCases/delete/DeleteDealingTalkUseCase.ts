import { DealingTalkRepository } from "../../repository/DealingRepository";

class DeleteDealingTalkUseCase {
    constructor(private dealingTalkRepository: DealingTalkRepository) { }

    async execute(id: number, userId: number) {
        const DealingTalkExist = await this.dealingTalkRepository.findById(id)

        if (!DealingTalkExist)
            throw new Error("DealingTalk id not exist");

        return await this.dealingTalkRepository.delete(id)

    }
}

export { DeleteDealingTalkUseCase } 