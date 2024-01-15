import { Router,Request,Response } from "express";
import { createDealing } from "../modules/dealing/useCases/create";
import { getDealing } from "../modules/dealing/useCases/get";
import { deleteDealing } from "../modules/dealing/useCases/delete";
import { currentUser } from "../middleware/current-user";

const dealingRouter = Router()

dealingRouter.post('/create/dealing',currentUser , async (req:Request, res:Response) =>{
    return createDealing.handle(req,res)
})
dealingRouter.get('/show/dealing/:id', async (req:Request, res:Response) =>{
    return getDealing.handle(req,res)
})

dealingRouter.delete('/delete/dealing/:id', currentUser, async (req:Request, res:Response) =>{
    return deleteDealing.handle(req,res)
})

export { dealingRouter } 