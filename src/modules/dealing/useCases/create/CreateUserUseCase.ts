import { IcreatePostDto } from "../../interface";
import { PostRepository } from "../../repository/PostRepository";

class CreatePostUseCase {
    constructor(private postRepository: PostRepository ) { }

    async execute({ authorId,category,description,stage,title}:IcreatePostDto) {

        return await this.postRepository.create({ authorId,category,description,stage,title})

    }
}

export  { CreatePostUseCase }