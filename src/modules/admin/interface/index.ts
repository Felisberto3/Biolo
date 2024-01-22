import { User,Admin } from "@prisma/client"

interface IcreateAdminDto {
    email: string,
    passwordHash: string
}

interface IUpdateAdminDto {
    id?: number,
    firstName?: string,
    lastName?: string,
    bornDate?: string,
    passwordHash?: string,
    imagePath?: string,
    password?:string
}
interface IRepositoryDto {
    create({ email, passwordHash }: IcreateAdminDto): Promise<Admin | null>
    findByEmail(email: string): Promise<Admin | null>
    findById(id: number): Promise<Admin | null>
    delete(id: number): Promise<boolean>
    update({ bornDate,firstName,lastName,passwordHash, imagePath, id }:IUpdateAdminDto): Promise<Admin | null>
}

export { IcreateAdminDto, IRepositoryDto, IUpdateAdminDto }