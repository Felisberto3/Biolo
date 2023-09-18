import { hash } from "bcrypt";
import { IUsuarioRepository, IcreateUsuario, IUsuarioResponse, IcreateUsuarioDto } from "../../userInterfaces/interfaces";
import { Usuario } from "@prisma/client";
import { createTokenService } from "src/services/createTokenService";

class CreateUserCase {
    constructor(private userRepository: IUsuarioRepository){}

   async execute({
    first_name,
    last_name,
    email,
    password
   }: IcreateUsuarioDto ): Promise<IUsuarioResponse >{
    const userExist = await this.userRepository.findByEmail(email)

    if (userExist.email) 
        throw new Error("Usuario ja existe");

    const password_hash = await hash(password, 8)

    const user = await this.userRepository.create({
        first_name,
        last_name,
        email,
        password_hash
       })

    const token = createTokenService(user.id )

    return { 
        token,
        first_name,
        last_name,
        email,
        password_hash
     }
    
   }
}

export { CreateUserCase }