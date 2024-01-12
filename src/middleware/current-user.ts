import {Request, Response,  NextFunction } from "express"
import { verify } from "jsonwebtoken";


declare global {
 
    interface payLoad {
        email: string,
        userId: number
    }
    namespace Express {
        interface Request {
            currenUser: payLoad
        }
    }
}
const currentUser = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader) 
        throw new Error("Token not provided");
        
    const [ , token ] = authHeader.split(' ')

    
        try {
            const payLoad = verify(token, process.env.KEY!) as payLoad

            req.currenUser = payLoad
            
        } catch (error) {
            throw new Error('Token not providesd');
        }   

        next()
}

export { currentUser }