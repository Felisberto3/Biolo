import { User } from "@prisma/client"

interface IcreateUserDto {
    email: string,
    passwordHash: string
}

interface IRepositoryDto {
    create({ email, passwordHash }: IcreateUserDto): Promise<User>
    findByEmail(email: string): Promise<User | null>
    findById(id: number): Promise<User | null>
}

export { IcreateUserDto, IRepositoryDto }