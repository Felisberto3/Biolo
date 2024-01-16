import { FollowerRepository } from "../../repository/FollowerRepository"

class GetFollowerUseCase {
    constructor(private followerRepository: FollowerRepository) { }

    async execute(id:number) {

        if (!id) {
            return await this.followerRepository.findAll()
        }
        return await this.followerRepository.findById(id)


    }
}

export  { GetFollowerUseCase }