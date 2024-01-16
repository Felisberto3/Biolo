import { Router,Request,Response } from "express";
import { currentUser } from "../middleware/current-user";
import { createFollower } from "../modules/follower/useCases/create";
import { getFollower } from "../modules/follower/useCases/get";
import { deleteFollower } from "../modules/follower/useCases/delete";

const followerRouter = Router() 

followerRouter.post('/create/follower',currentUser , async (req:Request, res:Response) =>{
    return createFollower.handle(req,res)
})
followerRouter.get('/show/follower/:id', async (req:Request, res:Response) =>{
    return getFollower.handle(req,res)
})

followerRouter.delete('/delete/follower/:id', currentUser, async (req:Request, res:Response) =>{
    return deleteFollower.handle(req,res)
})

export { followerRouter } 