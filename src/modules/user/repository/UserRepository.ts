import { Usuario } from "@prisma/client";
import { IUsuarioRepository, IcreateUsuario } from "../userInterfaces/interfaces";
import prisma from "../../../prisma";

class UsuarioRepository implements IUsuarioRepository {

    async create({ first_name, last_name, email, password_hash }: IcreateUsuario): Promise<Usuario> {

        const user = await prisma.usuario.create({ data: { first_name, last_name, email, password_hash }})

        return user
    }

    async findById(id: number): Promise<Usuario> {

        const usuario = await prisma.usuario.findFirst({ where: { id } })

        return usuario
    }

    async findByEmail(email: string): Promise<Usuario> {
        const usuario = await prisma.usuario.findUnique({ where: { email } })

        return usuario
    }
}