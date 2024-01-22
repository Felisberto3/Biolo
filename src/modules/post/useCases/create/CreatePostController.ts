import { Request,Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";
import * as Yup from 'yup'


class CreatePostController {
    constructor(private createPostUseCase: CreatePostUseCase) { }

    async handle(req:Request, res:Response) {
        const { category,description,stage,title } = req.body
        const { userId: authorId} = req.currenUser

        // const shema = Yup.object({
        //     category: Yup.string().required(), 
        //     description: Yup.string(),
        //     stage: Yup.string(),
        //     title: Yup.string()
        // })
 
        // const ya = await shema.isValid({category, description, stage, title})
        // console.log(ya);
        
        // if (true) {  
        //     throw new Error("Alguma coisa esta errada");
        // } 

        const newPost = await this.createPostUseCase.execute({ authorId,category,description,stage,title})
         
       return res.status(201).json(newPost)
    }
}

export  { CreatePostController }