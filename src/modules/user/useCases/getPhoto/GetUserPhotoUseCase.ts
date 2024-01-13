import { UserRepository } from "../../repository/UserRepository";

class GetUserPhotoUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute(id:number) {

        return await this.userRepository.findById(id)

    }
}

export  { GetUserPhotoUseCase }