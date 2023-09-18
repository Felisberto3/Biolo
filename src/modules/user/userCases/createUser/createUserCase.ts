import { hash } from "bcrypt";
import { IUsuarioRepository, IcreateUsuario, IUsuarioResponse, IcreateUsuarioDto } from "../../userInterfaces/interfaces";
import { createTokenService } from "src/services/createTokenService";

class CreateUserCase {
    constructor(private userRepository: IUsuarioRepository){}

   async execute({
    email,
    password
   }: IcreateUsuarioDto ): Promise<string >{

    const userExist = await this.userRepository.findByEmail(email)

    if (userExist.email) 
        throw new Error("Usuario ja existe");

    const password_hash = await hash(password, 8)

    return password_hash

   }
}

export { CreateUserCase }