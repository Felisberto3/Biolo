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



    // const user = await this.userRepository.create({
    //     first_name,
    //     last_name,
    //     email,
    //     password_hash
    //    })

    // const token = createTokenService(user.id )

    // return { 
    //     first_name,
    //     last_name,
    //     email,
    //     password_hash,
    //     token
    //  }
    
   }
}

export { CreateUserCase }