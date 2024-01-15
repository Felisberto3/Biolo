import { PostRepository } from "../../repository/PostRepository";

class GetPostPhotoUseCase {
    constructor(private postRepository: PostRepository) { }

    async execute(id:number) {

        return await this.postRepository.findById(id)

    }
}

export  { GetPostPhotoUseCase }