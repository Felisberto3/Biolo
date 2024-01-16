import { IcreateFollowerDto } from "../../interface";
import { FollowerRepository } from "../../repository/FollowerRepository";

class CreateFollowerUseCase {
    constructor(private FollowerRepository: FollowerRepository ) { }

    async execute({ followedId, followerId}:IcreateFollowerDto) {

        return await this.FollowerRepository.create({ followedId, followerId})

    }
}

export  { CreateFollowerUseCase }