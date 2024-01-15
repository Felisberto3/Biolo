import { Dealing } from "@prisma/client"

interface IcreateDealingDto {
    posterId: number,
    buyerId: number,
    bioloId: number
}

interface IDealingRepositoryDto {
    create({ bioloId,buyerId, posterId }: IcreateDealingDto): Promise<Dealing>
    findById(id: number): Promise<Dealing | null>
    delete(id: number): Promise<boolean>
}

export { IcreateDealingDto, IDealingRepositoryDto  }