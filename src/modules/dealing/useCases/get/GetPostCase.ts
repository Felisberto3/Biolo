import { PostRepository } from "../../repository/PostRepository"

class GetPostUseCase {
    constructor(private postRepository: PostRepository) { }

    async execute(id:number) {

        if (!id) {
            return await this.postRepository.findAll()
        }
        return await this.postRepository.findById(id)


    }
}

export  { GetPostUseCase }