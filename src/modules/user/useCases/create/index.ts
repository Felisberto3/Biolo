import { UserRepository } from "../../repository/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userRepository = new UserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)
const createUser = new CreateUserController(createUserUseCase)

export { createUser }