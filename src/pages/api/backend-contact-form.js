const nodemailer = require("nodemailer");



export default function BackendContactForm(req,res){

    if (req.method === 'POST') {

const contactEmail =  nodemailer.createTransport({
    service : 'gmail',
    host: 'smtp.gmail.com',
      port : 587,
  auth: {

    user: 'moeezkashif13@gmail.com',
    pass: process.env.GMAILPASSFOREMAILS

  },



});


const name = req.body.data.name;
const email = req.body.data.email;
const message = req.body.data.message;

// VERIFY EMAIL WALAA METHD BHII ADD KARNAA


const mail = {
  from: `${name} <${email}> ` ,
  to: "moeezkashif13@gmail.com",
  subject: "Contact Form Submission",
  html: `<p>Name: ${name}</p>
         <p>Email: ${email}</p>
         <p>Message: ${message}</p>
         
         `,

        
};

    


 contactEmail.sendMail(mail, (error) => {
  if (error) {

    res.json({ status: "ERROR" });
  } else {
    res.json({ status: "Message Sent" });
  }
})


    }

}

