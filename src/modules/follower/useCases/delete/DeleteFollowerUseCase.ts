import { FollowerRepository } from "../../repository/FollowerRepository"

class DeleteFollowerUseCase {
    constructor(private FollowerRepository: FollowerRepository) { }

    async execute(id:number,userId:number) {
        const FollowerExist = await this.FollowerRepository.findById(id)

        if (!FollowerExist) 
            throw new Error("Follower id not exist");

        if (FollowerExist.followedId===userId) 
              return await this.FollowerRepository.delete(id)

        throw new Error("You are not the owner of the Follower");
        

    }
}

export  { DeleteFollowerUseCase } 