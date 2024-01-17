import { Dealing, User } from "@prisma/client";
import { prisma } from "../../../prisma";
import { IDealingRepositoryDto, IcreateDealingDto } from "../interface";

class DealingRepository implements IDealingRepositoryDto {
    constructor() { }

    async create({ bioloId,buyerId,posterId  }: IcreateDealingDto): Promise<Dealing> {
        return await prisma.dealing.create({ data: { bioloId, buyerId,posterId } })
    }

    async findById(id: number): Promise<Dealing | null> {
        if (!id) return null
        return await prisma.dealing.findFirst({
            where: { id }
        })
    }

    async findByBuyerId(buyerId: number): Promise<Dealing | null> {
        return await prisma.dealing.findFirst({ where: { buyerId }})
    }

    async findAll(){
        return await prisma.dealing.findMany()
    }

    async delete(id: number): Promise<boolean> {
        await prisma.dealing.delete({ where:  {id} })

        return true
    }
}



export { DealingRepository } 