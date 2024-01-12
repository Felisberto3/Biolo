import jwt from "jsonwebtoken"

const tokenService = (email: string, id:number ) => {

    return jwt.sign({
        email,
        userId: id
    },
        process.env.KEY!,
        { expiresIn: '10d' }
    )
}

export { tokenService }