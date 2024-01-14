import { PostRepository } from "../../repository/PostRepository"
import { DeletePostController } from "./DeletePostController"
import { DeletePostUseCase } from "./DeletePostUseCase"


const postRepository = new PostRepository()
const deletePostUseCase = new DeletePostUseCase(postRepository)
const deletePost = new DeletePostController(deletePostUseCase)

export { deletePost }