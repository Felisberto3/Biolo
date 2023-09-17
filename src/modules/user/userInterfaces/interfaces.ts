import { User } from "@prisma/client"

interface IcreateUser {
    email: string,
    password: string
}

interface IUserRepository {
    create({
        email,
        password
    }: IcreateUser): Promise<User>,

    findByEmail(email: string ): Promise<User>,

    findById(userId: string): Promise<User>,
}

export { IUserRepository, IcreateUser }