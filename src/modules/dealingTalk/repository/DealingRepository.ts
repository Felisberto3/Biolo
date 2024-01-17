import { DealingTalk, User } from "@prisma/client";
import { prisma } from "../../../prisma";
import { IDealingTalkRepositoryDto, IUpdateDealingTalkDto, IcreateDealingTalkDto } from "../interface";

class DealingTalkRepository implements IDealingTalkRepositoryDto {
    constructor() { }

    async create({content,dealingId,righterId  }: IcreateDealingTalkDto): Promise<DealingTalk> {
        return await prisma.dealingTalk.create({ data: { content,righterId,dealingId  } })
    }

    async findById(id: number): Promise<DealingTalk | null> {
        if (!id) return null
        return await prisma.dealingTalk.findFirst({
            where: { id }
        })
    }

    async findAll(){ 
        return await prisma.dealingTalk.findMany()
    }

    async update({ content, id, imagePath }: IUpdateDealingTalkDto): Promise<DealingTalk>{
        return prisma.dealingTalk.update({
            where:{ id },
            data: {content, imagePath }       
         })
    }

    async delete(id: number): Promise<boolean> {
        await prisma.dealingTalk.delete({ where:  {id} })

        return true
    }
}



export { DealingTalkRepository } 