import { UsuarioRepository } from "../../repository/UserRepository";
import { CreateUserCase } from "./createUserCase";
import { CreateUserController } from "./createUserController";

 const usuarioRepository = new UsuarioRepository()
 const createUserCase = new CreateUserCase(usuarioRepository)
 const createUserController = new CreateUserController(createUserCase)

 export { createUserController }