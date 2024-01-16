import { FollowerRepository } from "../../repository/FollowerRepository"
import { DeleteFollowerController } from "./DeleteFollowerController"
import { DeleteFollowerUseCase } from "./DeleteFollowerUseCase"


const followerRepository = new FollowerRepository()
const deleteFollowerUseCase = new DeleteFollowerUseCase(followerRepository)
const deleteFollower = new DeleteFollowerController(deleteFollowerUseCase)

export { deleteFollower }