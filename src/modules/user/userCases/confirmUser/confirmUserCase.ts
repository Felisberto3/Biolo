
import { UsuarioRepository } from "../../repository/UserRepository";
import { createTokenService } from "src/services/createTokenService";

class ConfirmUserCase {
    constructor( private userRepository: UsuarioRepository) { }

    async execute(data: mightUser) {

        const user = await this.userRepository.create(data)

        const token = createTokenService(user.id)

        return { 
            userId: user.id,
            token
        }

    }
}

export { ConfirmUserCase }