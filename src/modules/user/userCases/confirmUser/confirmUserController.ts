import { Request, Response } from "express";
import { ConfirmUserCase } from "./confirmUserCase";
class ConfirmUserController {

    constructor(private confirmUserCase: ConfirmUserCase) { }

    async handle(req: Request, res: Response) {
        const { Code } = req.body

        const { first_name, last_name, email, password_hash, codeSent } = req.mightUser

        if (Code !== codeSent)
            throw new Error("confirmation code incorrect");

        const data = {
            first_name,
            last_name,
            email,
            password_hash,
        }

        const newUserIdAndToken = await this.confirmUserCase.execute(data)

        res.status(201).json({ newUserIdAndToken })
    }
}

export { ConfirmUserController }