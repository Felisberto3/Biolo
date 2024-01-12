import { hash } from "bcryptjs";
import { UserRepository } from "../../repository/UserRepository";

class CreateUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute(email:string,password:string) {
        const user= await this.userRepository.findByEmail(email)

        if (user) {
            throw new Error("User Already Existe");
        }

        const passwordHash = await hash(password,8)

        return await this.userRepository.create({ email, passwordHash})

    }
}

export  { CreateUserUseCase }