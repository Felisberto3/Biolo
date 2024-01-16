import { Follower } from "@prisma/client"

interface IcreateFollowerDto {
    followerId: number,
    followedId: number
}


interface IFollowerRepositoryDto {
    create({ followedId, followerId }: IcreateFollowerDto): Promise<Follower>
    findById(id: number): Promise<Follower | null>
    delete(id: number): Promise<boolean>
}

export { IcreateFollowerDto, IFollowerRepositoryDto }