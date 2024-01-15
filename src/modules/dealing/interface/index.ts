import { Dealing } from "@prisma/client"

interface IcreateDealingDto {
    buyerId: number,
    bioloId: number
}

interface IDealingRepositoryDto {
    create({ bioloId,buyerId }: IcreateDealingDto): Promise<Dealing>
    findById(id: number): Promise<Dealing | null>
    delete(id: number): Promise<boolean>
}

export { IcreateDealingDto, IDealingRepositoryDto  }