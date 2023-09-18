// import { createUserShema } from "src/shema/createUserSchema";
import { CreateUserCase } from "./createUserCase";
import { Response, Request  } from "express";


declare global {
    interface mightUser {
        first_name: string,
        last_name: string,
        email: string,
        password_hash: string,
        codeSent?: number
    }
    namespace Express {
        interface Request  {
            mightUser?: mightUser
        }
    }
}

class CreateUserController {
    constructor(private createUserCase: CreateUserCase){}

   async handle(req: Request, res: Response ) {
    const {first_name, last_name, email, password } = req.body

    // if (!(await createUserShema.isValid({
    //     first_name, 
    //     last_name, 
    //     email, 
    //     password 
    // }))) {
    //     throw new Error('Dados invalidos!')
    // }

    const password_hash = await this.createUserCase.execute({ email, password })


    const codeSent = Math.floor( Math.random() * 10000 )

    req.mightUser = {
        first_name,
        last_name,
        email,
        password_hash,
        codeSent
    }

    return res.status(200).json({ message: 'confirm code sent in user email'})
   }
}

export { CreateUserController }



.......................
function enviarEmailDeRedefinicaoDeSenha(destinatarioEmail, linkRedefinicao) {
  const mailOptions = {
    from: 'seu_email@gmail.com', // Seu endereço de e-mail
    to: destinatarioEmail,      // Endereço de e-mail do destinatário
    subject: 'Redefinição de Senha',
    text: `Você solicitou a redefinição de senha. Clique no link a seguir para redefinir sua senha: ${linkRedefinicao}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar e-mail de redefinição de senha:', error);
    } else {
      console.log('E-mail de redefinição de senha enviado:', info.response);
    }
  });
}

// Exemplo de uso:
const emailDestinatario = 'email_destinatario@example.com';
const linkRedefinicao = 'https://seusite.com/redefinicao-senha/token-unico';

enviarEmailDeRedefinicaoDeSenha(emailDestinatario, linkRedefinicao);