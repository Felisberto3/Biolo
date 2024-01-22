import { Post, User } from "@prisma/client";
import { prisma } from "../../../prisma";
import { IPostRepositoryDto, IUpdatePostDto, IcreatePostDto } from "../interface";

class PostRepository implements IPostRepositoryDto {
    constructor() { }

    async create({ authorId, category, description, stage, title }: IcreatePostDto): Promise<Post> {
        return await prisma.post.create({ data: { authorId, category, description, stage, title } })
    }

    async findById(id: number): Promise<Post | null> {
        if (!id) return null
        return await prisma.post.findFirst({
            where: { id },
            include: {
                Dealing: {
                    include: {
                        DealingTalk: true
                    }
                }
            }
        })
    }

    async findAll() {
        return await prisma.post.findMany({
            include: {
                Dealing: {
                    include: {
                        DealingTalk: true
                    }
                }
            }
        })
    }

    async update({ authorId, category, description, id, imagePath, stage, title }: IUpdatePostDto) {
        return prisma.post.update({
            where: { id },
            data: { authorId, category, description, id, imagePath, stage, title }
        })
    }

    async delete(id: number): Promise<boolean> {
        await prisma.post.delete({ where: { id } })

        return true
    }
}



export { PostRepository } 