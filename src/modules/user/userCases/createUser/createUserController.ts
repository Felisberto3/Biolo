// import { createUserShema } from "src/shema/createUserSchema";
import { transporter } from "src/transporterEmail";
import { CreateUserCase } from "./createUserCase";
import { Response, Request  } from "express";


function enviarEmailDeConfirmacaoDeConta(destinatarioEmail: string, confirmCode: number) {
    const mailOptions = {
      from:'felisbertoalberto183@gmail.com', //antes: 'seu_email@gmail.com', // Seu endereço de e-mail
      to: destinatarioEmail,      // Endereço de e-mail do destinatário
      subject: 'codigo de confirmação',
      text: `Você está criando uma conta no BIOLO, para finalizar com o processo copie este código: ${confirmCode}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erro ao enviar e-mail de confirmação de conta:', error);
      } else {
        console.log('E-mail de confirmação de conta enviado:', info.response);
      }
    });
  }


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

    console.log(codeSent);
    

    const emailDestinatario = email;
    const confirmCode = codeSent;

    enviarEmailDeConfirmacaoDeConta(emailDestinatario, confirmCode);

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





