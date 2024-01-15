import { Router,Request,Response } from "express";
import { currentUser } from "../middleware/current-user";
import { createDealingTalk } from "../modules/dealingTalk/useCases/create";
import { getDealingTalk } from "../modules/dealingTalk/useCases/get";
import { deleteDealingTalk } from "../modules/dealingTalk/useCases/delete";
import { getDealingTalkPhoto } from "../modules/dealingTalk/useCases/getPhoto";
import { updateDealingTalk } from "../modules/dealingTalk/useCases/update";
import { uploads } from "../config/multer";


const dealingTalkRouter = Router() 

dealingTalkRouter.post('/create/dealingTalk',currentUser , async (req:Request, res:Response) =>{
    return createDealingTalk.handle(req,res)
})
dealingTalkRouter.get('/show/dealingTalk/:id', async (req:Request, res:Response) =>{
    return getDealingTalk.handle(req,res)
})
dealingTalkRouter.get('/show/dealingTalk/photo/:id', async (req:Request, res:Response) =>{
    return getDealingTalkPhoto.handle(req,res)
})

dealingTalkRouter.put('/update/DealingTalk/:id',currentUser, uploads.single('file'), async (req:Request, res:Response) =>{
    return updateDealingTalk.handle(req,res)
})

dealingTalkRouter.delete('/delete/dealingTalk/:id', currentUser, async (req:Request, res:Response) =>{
    return deleteDealingTalk.handle(req,res)
})

export { dealingTalkRouter } 