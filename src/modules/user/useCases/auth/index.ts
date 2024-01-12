import { UserRepository } from "../../repository/UserRepository";
import { AuthUserController } from "./AuthUserController";
import { AuthUserUseCase } from "./AuthUserUseCase";


const userRepository = new UserRepository()
const authUserUseCase = new AuthUserUseCase(userRepository)
const autheUser = new AuthUserController(authUserUseCase)

export { autheUser }