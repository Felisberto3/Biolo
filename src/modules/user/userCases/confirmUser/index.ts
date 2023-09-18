import { UsuarioRepository } from "../../repository/UserRepository"
import { ConfirmUserCase } from "./confirmUserCase"
import { ConfirmUserController } from "./confirmUserController"


 const usuarioRepository = new UsuarioRepository()
 const confirmUserCase = new ConfirmUserCase(usuarioRepository)
 const confirmUserController = new ConfirmUserController(confirmUserCase)

 export { confirmUserController }