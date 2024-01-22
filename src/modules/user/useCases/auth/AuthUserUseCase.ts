import { compare } from "bcryptjs";
import { UserRepository } from "../../repository/UserRepository";
import { tokenService } from "../../../../services/tokenServices";

class AuthUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute(email:string,password:string) {
        const userExist= await this.userRepository.findByEmail(email)

        if (!userExist) {
            throw new Error("Email or Password incorrect");
        }

        const isEqual = await compare(password,userExist.passwordHash)

        if (!isEqual) {
            throw new Error("Email or Password incorrect ");
        }

        const token =  tokenService(email, userExist.id)

        return {
            userExist,
            token
        }

    }
}

export  { AuthUserUseCase }