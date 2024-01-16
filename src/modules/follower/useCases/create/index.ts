import { FollowerRepository } from "../../repository/FollowerRepository"
import { CreateFollowerController } from "./CreateFollowerController"
import { CreateFollowerUseCase } from "./CreateFollowerUseCase"



const followerRepository = new FollowerRepository()
const createFollowerUseCase = new CreateFollowerUseCase(followerRepository)
const createFollower = new CreateFollowerController(createFollowerUseCase)

export { createFollower }

