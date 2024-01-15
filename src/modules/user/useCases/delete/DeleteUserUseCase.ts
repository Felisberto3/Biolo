import { UserRepository } from "../../repository/UserRepository";

class DeleteUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute(id: number, userId: number) {
        if (id !== userId) {
            throw new Error("Delete action Denied. You are not the owner");
        }

        const userExist = await this.userRepository.findById(id)

        if (!userExist)
            throw new Error("user id not exist");

        return await this.userRepository.delete(id)
    }
} 

export { DeleteUserUseCase }  