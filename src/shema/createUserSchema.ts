import * as Yup from "yup";

export const createUserShema = Yup.object().shape({
    first_name : Yup.string().trim().required(),
     last_name : Yup.string().trim().required(),
     email : Yup.string().trim().required(),
     password : Yup.string().trim().required().min(7,'deve ter mais de 7 caracter')
})