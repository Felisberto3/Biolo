import { User } from "@prisma/client";
import { IRepositoryDto, IUpdateUserDto, IcreateUserDto } from "../interface";
import { prisma } from "../../../prisma";

class UserRepository implements IRepositoryDto {
    constructor() { }

    async create({ email, passwordHash }: IcreateUserDto): Promise<User> {
        return await prisma.user.create({ data: { email, passwordHash } })
    }

    async findByEmail(email: string): Promise<User| null> {
        if (!email)  return null
        
        const user = await prisma.user.findUnique({
            where: { email }
        })

        return user
    }

    async findById(id: number): Promise<User | null> {
        if (!id) return null
        return await prisma.user.findFirst({
            where: { id }
        })
    }

    async findAll(){
        return await prisma.user.findMany()
    }

    async update({id, bornDate,firstName,lastName,imagePath,passwordHash }: IUpdateUserDto){
        return prisma.user.update({
            where:{ id },
            data: {bornDate,firstName,lastName,imagePath, passwordHash }       
         })
    }

    async delete(id: number): Promise<boolean> {
        await prisma.user.delete({ where:  {id} })

        return true
    }
}



export { UserRepository } 