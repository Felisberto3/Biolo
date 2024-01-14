import { PostRepository } from "../../repository/PostRepository";
import { GetPostUseCase } from "./GetPostCase";
import { GetPostController } from "./GetPostController";



const postRepository = new PostRepository()
const getPostUseCase = new GetPostUseCase(postRepository)
const getPost = new GetPostController(getPostUseCase)

export { getPost }