import { UserRepository } from "../../repository/UserRepository";
import { GetUserPhotoController } from "./GetUserPhotoController";
import { GetUserPhotoUseCase } from "./GetUserPhotoUseCase";



const userRepository = new UserRepository()
const getUserPhotoUseCase = new GetUserPhotoUseCase(userRepository)
const getUserPhoto = new GetUserPhotoController(getUserPhotoUseCase)

export { getUserPhoto }