import { DealingTalk } from "@prisma/client"

interface IcreateDealingTalkDto {
    content: string,
    righterId: number,
    dealingId: number
}

interface IUpdateDealingTalkDto {
    id: number,
    content: string,
    imagePath?: string,
    userId?: number
}

interface IDealingTalkRepositoryDto {
    create({ content,dealingId,righterId }: IcreateDealingTalkDto): Promise<DealingTalk>
    findById(id: number): Promise<DealingTalk | null>
    delete(id: number): Promise<boolean>
    update({ content,id}: IUpdateDealingTalkDto): Promise<DealingTalk | null>
}

export { IcreateDealingTalkDto, IDealingTalkRepositoryDto , IUpdateDealingTalkDto}