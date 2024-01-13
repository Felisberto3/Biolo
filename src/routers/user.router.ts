import { Router,Request,Response } from "express";
import { createUser } from "../modules/user/useCases/create";
import { getUser } from "../modules/user/useCases/get";
import { autheUser } from "../modules/user/useCases/auth";
import { currentUser } from "../middleware/current-user";
import { updateUser } from "../modules/user/useCases/update";
import { deleteUser } from "../modules/user/useCases/delete";
import { uploads } from "../config/multer";
import { getUserPhoto } from "../modules/user/useCases/getPhoto";

const userRouter = Router()

userRouter.post('/signin', async (req:Request, res:Response) =>{
    return createUser.handle(req,res)
})

userRouter.post('/auth', async (req:Request, res:Response) =>{
    return autheUser.handle(req,res)
})

userRouter.get('/show/user/:id', async (req:Request, res:Response) =>{
    return getUser.handle(req,res)
})

userRouter.get('/show/user/photo/:id', async (req:Request, res:Response) =>{
    return getUserPhoto.handle(req,res)
})


userRouter.put('/update/user',currentUser, uploads.single('file'), async (req:Request, res:Response) =>{
    return updateUser.handle(req,res)
})
userRouter.delete('/delete/user/:id', currentUser, async (req:Request, res:Response) =>{
    return deleteUser.handle(req,res)
})

export { userRouter } 