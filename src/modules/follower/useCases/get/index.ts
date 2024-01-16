import { FollowerRepository } from "../../repository/FollowerRepository";
import { GetFollowerUseCase } from "./GetFollowerCase";
import { GetFollowerController } from "./GetFollowerController";



const followerRepository = new FollowerRepository()
const getFollowerUseCase = new GetFollowerUseCase(followerRepository)
const getFollower = new GetFollowerController(getFollowerUseCase)

export { getFollower }