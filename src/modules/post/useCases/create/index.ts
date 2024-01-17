import { FollowerRepository } from "../../../follower/repository/FollowerRepository"
import { NotificationRepository } from "../../../notification/repository/NotificationRepository"
import { PostRepository } from "../../repository/PostRepository"
import { CreatePostController } from "./CreatePostController"
import { CreatePostUseCase } from "./CreatePostUseCase"



const postRepository = new PostRepository()
const notificationRepository = new NotificationRepository()
const followerRepository = new FollowerRepository()
const createPostUseCase = new CreatePostUseCase(postRepository,notificationRepository,followerRepository)
const createPost = new CreatePostController(createPostUseCase)

export { createPost }