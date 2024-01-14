import { Post } from "@prisma/client"

interface IcreatePostDto {
    category: string,
    title: string,
    description: string,
    stage: 'sold' | 'onSell',
    authorId: number
}

interface IUpdatePostDto {
    id?: number,
    category?: string,
    title?: string,
    description?: string,
    imagePath?:string,
    stage?: 'sold' | 'onSell',
    authorId?: number
}
interface IPostRepositoryDto {
    create({authorId,category,description,stage,title }: IcreatePostDto): Promise<Post>
    findById(id: number): Promise<Post | null>
    delete(id: number): Promise<boolean>
    update({authorId,category,description,id,imagePath,stage,title }: IUpdatePostDto): Promise<Post | null>
}

export { IcreatePostDto, IPostRepositoryDto, IUpdatePostDto }