import { DealingRepository } from "../../../dealing/repository/DealingRepository";
import { NotificationRepository } from "../../../notification/repository/NotificationRepository";
import { IcreateDealingTalkDto } from "../../interface";
import { DealingTalkRepository } from "../../repository/DealingRepository";

class CreateDealingTalkUseCase {
    constructor(
        private dealingTalkRepository: DealingTalkRepository,
        private dealingRepository: DealingRepository,
        private notificationRepository: NotificationRepository
        ) { }

    async execute({ content,dealingId,righterId}:IcreateDealingTalkDto) {

        const  dealing = await this.dealingRepository.findById(dealingId)

        if (righterId !== dealing?.posterId ) {
            await this.notificationRepository.create({
                notifiedBy:righterId,
                recipientId: dealing?.posterId!,
                type:'Enviou-te uma mensagem',
                postId: dealing?.bioloId!
            })
        }
       
        return await this.dealingTalkRepository.create({ content, dealingId, righterId})

    }
}

export  { CreateDealingTalkUseCase }