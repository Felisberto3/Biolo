import { Usuario } from "@prisma/client"

interface IcreateUsuario {
    first_name : string,
    last_name:string,
    email: string,
    password_hash: string
}

interface IUsuarioRepository {
    create({
        first_name,
        last_name,
        email,
        password_hash
    }: IcreateUsuario): Promise<Usuario>,

    findByEmail(email: string ): Promise<Usuario>,

    findById(id: number): Promise<Usuario>,
}

export { IUsuarioRepository, IcreateUsuario }