import { UserRepository } from "../../repository/UserRepository";

class DeleteUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute(id:number) {
         return await this.userRepository.delete(id)
    }
}

export  { DeleteUserUseCase }