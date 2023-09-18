
import nodemailer from 'nodemailer';

// Configure o transporte de e-mail
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user:   'felisbertoalberto183@gmail.com',   // anteriormente :  'seu_email@gmail.com', // Seu endereço de e-mail
    pass: 'Fidel1d@de' //anteriormente :"sua_senha"    // Sua senha ou token de aplicativo
  },
});

export { transporter }