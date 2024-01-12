import * as Yup from "yup";
import { IUpdateUserDto } from "../modules/user/interface";

 function ValidateAuthUserData ( email:string, password:string) {
   
    const userSchema = Yup.object({
        email:Yup.string().trim().email('E-mail invalid!').required('email is required!'),
        password:Yup.string().trim().required('email is required')
    })

    if (! userSchema.validateSync({ email, password}, { abortEarly: false })) {
        throw new Error(" Data type invalid");
    } 
}


function ValidateUpdateUserData ({ firstName,lastName,bornDate, password,imagePath }:IUpdateUserDto) {
   
    const userSchema = Yup.object({
        firstName: Yup.string(),
        lastName: Yup.string(),
        bornDate: Yup.string(),
         password: Yup.string(),
        imagePath: Yup.string()
    })

    
    if (! userSchema.validateSync({ firstName,lastName,bornDate, password,imagePath }, { abortEarly: false })) {
         throw new Error(" Data type invalid");
    } 
}

export { ValidateAuthUserData,ValidateUpdateUserData  }