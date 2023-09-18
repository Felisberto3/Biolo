
import { Request, Response } from "express";
import { UsuarioRepository } from "../../repository/UserRepository";
class ConfirmUser {
    constructor(private confirmCodeDto: number, private userRepository: UsuarioRepository) { }

    async handle(req: Request, res: Response) {
        const Code = this.confirmCodeDto

        const sentCode = req.mightUser.confirmCode

        if (Code !== sentCode)
            throw new Error("confirmation code incorrect");

        const user = this.userRepository.create({ 
            first_name: req.mightUser.first_name, 
            last_name: req.mightUser.last_name, 
            email: req.mightUser.email, 
            password_hash: req.mightUser.password_hash
        })

        return user
    }
}

export { ConfirmUser }