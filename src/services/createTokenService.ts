import  jwt from 'jsonwebtoken'
const createTokenService = (userId: number) : string  =>{
    const token = jwt.sign(
        { userId},
        'key',
        {
            expiresIn: '10h'
        }
    )

    return token
}

export { createTokenService }