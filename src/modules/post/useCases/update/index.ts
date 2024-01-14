import { PostRepository } from "../../repository/PostRepository"
import { UpdatePotController } from "./UpdatePostController"
import { UpdatePostUseCase } from "./UpdatePostUseCase"


const postRepository = new PostRepository()
const updatePostUseCase = new UpdatePostUseCase(postRepository)
const updatePost = new UpdatePotController(updatePostUseCase)

export { updatePost }