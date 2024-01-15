import { PostRepository } from "../../repository/PostRepository"
import { CreatePostController } from "./CreatePostController"
import { CreatePostUseCase } from "./CreatePostUseCase"



const postRepository = new PostRepository()
const createPostUseCase = new CreatePostUseCase(postRepository)
const createPost = new CreatePostController(createPostUseCase)

export { createPost }