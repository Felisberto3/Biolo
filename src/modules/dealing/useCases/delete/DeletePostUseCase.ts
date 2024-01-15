import { PostRepository } from "../../repository/PostRepository"

class DeletePostUseCase {
    constructor(private postRepository: PostRepository) { }

    async execute(id:number) {
        return await this.postRepository.delete(id)
    }
}

export  { DeletePostUseCase }