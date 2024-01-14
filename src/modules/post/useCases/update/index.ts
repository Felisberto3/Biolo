import { UserRepository } from "../../repository/UserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";


const userRepository = new UserRepository()
const updateUserUseCase = new UpdateUserUseCase(userRepository)
const updateUser = new UpdateUserController(updateUserUseCase)

export { updateUser }