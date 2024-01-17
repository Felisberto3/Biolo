import { NotificationRepository } from "../../../notification/repository/NotificationRepository";
import { IcreateDealingDto } from "../../interface";
import { DealingRepository } from "../../repository/DealingRepository";

class CreateDealingUseCase {
    constructor(
        private dealingRepository: DealingRepository,
        private notificationRepository: NotificationRepository
        ) { }

    async execute({ bioloId,buyerId,posterId }:IcreateDealingDto) {

        if (buyerId === posterId) 
            throw new Error("You may not buy your biolo");

        const buyerExist = await this.dealingRepository.findByBuyerId(buyerId)

        if (buyerExist) 
            throw new Error("You has already a dealing with in post");
            
        const newDealing = await this.dealingRepository.create({ bioloId,buyerId, posterId })
        
        await this.notificationRepository.create({
            notifiedBy: buyerId,
            recipientId: posterId,
            type: 'Criou um novo acordo contigo',
            postId: bioloId
        })

        return newDealing

    }
}

export  { CreateDealingUseCase }