import { User } from "@prisma/client"

interface IcreateUserDto {
    email: string,
    passwordHash: string
}

interface IUpdateUserDto {
    id?: number,
    firstName?: string,
    lastName?: string,
    bornDate?: string,
    passwordHash?: string,
    imagePath?: string,
    password?:string
}
interface IRepositoryDto {
    create({ email, passwordHash }: IcreateUserDto): Promise<User>
    findByEmail(email: string): Promise<User | null>
    findById(id: number): Promise<User | null>
    delete(id: number): Promise<boolean>
    update({ bornDate,firstName,lastName,passwordHash, imagePath, id }:IUpdateUserDto): Promise<User | null>
}

export { IcreateUserDto, IRepositoryDto, IUpdateUserDto }