import { UserRepository } from "../../repository/UserRepository";
import { IUpdateUserDto } from "../../interface";

class UpdateUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute({id, firstName,lastName,bornDate, passwordHash }:IUpdateUserDto ) {
        return this.userRepository.update({ bornDate,firstName,id,lastName,passwordHash})
    }
}

export  { UpdateUserUseCase }