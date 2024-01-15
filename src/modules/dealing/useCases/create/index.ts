import { PostRepository } from "../../repository/PostRepository"
import { CreatePostController } from "./CreateUserController"
import { CreatePostUseCase } from "./CreateUserUseCase"


const postRepository = new PostRepository()
const createPostUseCase = new CreatePostUseCase(postRepository)
const createPost = new CreatePostController(createPostUseCase)

export { createPost }