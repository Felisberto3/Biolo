import { Follower, User } from "@prisma/client";
import { prisma } from "../../../prisma";
import { IFollowerRepositoryDto, IcreateFollowerDto } from "../interface";

class FollowerRepository implements IFollowerRepositoryDto {
    constructor() { }

    async create({ followedId, followerId }: IcreateFollowerDto): Promise<Follower> {
        return await prisma.follower.create({ data: { followerId, followedId } })
    }

    async findById(id: number): Promise<Follower | null> {
        if (!id) return null
        return await prisma.follower.findFirst({
            where: { id }
        })
    }

    async findByfollowedId(followedId: number): Promise<Follower[] | null> {
        if (!followedId)  return null

        return await prisma.follower.findMany({ where: { followedId }})
    }

    async findAll(){
        return await prisma.follower.findMany()
    }


    async delete(id: number): Promise<boolean> {
        await prisma.follower.delete({ where:  {id} })

        return true
    }
}



export { FollowerRepository } 