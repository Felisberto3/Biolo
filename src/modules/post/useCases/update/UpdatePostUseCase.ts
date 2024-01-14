import { IUpdatePostDto } from "../../interface"
import { PostRepository } from "../../repository/PostRepository"

class UpdatePostUseCase {
    constructor(private postRepository: PostRepository) { }

    async execute({authorId,category,description,id,imagePath,stage,title}:IUpdatePostDto ) {

        return this.postRepository.update({authorId,category,description,id,imagePath,stage,title})
    }
}

export  { UpdatePostUseCase }