import { Router,Request,Response } from "express";
import { currentUser } from "../middleware/current-user";
import { createNotification } from "../modules/notification/useCases/create";
import { getNotification } from "../modules/notification/useCases/get";

const notificationRouter = Router() 

notificationRouter.post('/create/notification',currentUser , async (req:Request, res:Response) =>{
    return createNotification.handle(req,res)
})
notificationRouter.get('/show/notification', currentUser, async (req:Request, res:Response) =>{
    return getNotification.handle(req,res)
})


export { notificationRouter } 