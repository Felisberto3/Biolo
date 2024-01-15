import { PostRepository } from "../../repository/PostRepository"

class DeletePostUseCase {
    constructor(private postRepository: PostRepository) { }

    async execute(id:number,userId:number) {
        const postExist = await this.postRepository.findById(id)

        if (!postExist) 
            throw new Error("Post id not exist");

        if (postExist.authorId===userId) 
              return await this.postRepository.delete(id)

        throw new Error("You are not the owner of the Post");
        

    }
}

export  { DeletePostUseCase } 