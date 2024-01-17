import { Router,Request,Response } from "express";
import { getPost } from "../modules/post/useCases/get";
import { getPostPhoto } from "../modules/post/useCases/getPhoto";
import { currentUser } from "../middleware/current-user";
import { uploads } from "../config/multer";
import { deletePost } from "../modules/post/useCases/delete";
import { updatePost } from "../modules/post/useCases/update";
import { createPost } from "../modules/post/useCases/create";

const postRouter = Router()

postRouter.post('/create/post',currentUser,async (req:Request, res:Response) =>{
    return createPost.handle(req,res)
})
postRouter.get('/show/post/:id', async (req:Request, res:Response) =>{
    return getPost.handle(req,res)
})

postRouter.get('/show/post/photo/:id', async (req:Request, res:Response) =>{
    return getPostPhoto.handle(req,res)
})

postRouter.put('/update/post/:id',currentUser, uploads.single('file'), async (req:Request, res:Response) =>{
    return updatePost.handle(req,res)
})
postRouter.delete('/delete/post/:id', currentUser, async (req:Request, res:Response) =>{
    return deletePost.handle(req,res)
})

export { postRouter } 