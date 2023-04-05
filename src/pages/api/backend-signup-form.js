const nodemailer = require("nodemailer");


export default async function BackendSignupForm(req,res){

    if (req.method === 'POST') {


      
        // console.log(req.body.data);



const contactEmail =  nodemailer.createTransport({
    service : 'gmail',
    host: 'smtp.gmail.com',
      port : 587,
  auth: {

    user: 'moeezkashif13@gmail.com',
    pass: process.env.GMAILPASSFOREMAILS

  },



});


// const message = req.body.data.message;

// VERIFY EMAIL WALAA METHD BHII ADD KARNAA

// console.log(...req.body.data);

const {City,MC,EIN,Address,State,Zip,...rest} = req.body.data


console.log(rest,"rest rest rest");

const mail = {
  from: `${rest["Driver Name"]} <${rest["Company Email"]}> ` ,
  
  to: "moeezkashif13@gmail.com",
  subject: "Contact Form Submission",
  html: `
  <div style="font-size:1.2rem">
  <p>Company Name: ${rest["company name"]}</p>
  <p>MC: ${MC}</p>
  <p>US Dot: ${rest["US Dot"]}</p>
  <p>EIN: ${EIN}</p>
  <p>Address: ${Address}</p>
  <p>City: ${City}</p>
  <p>State: ${State}</p>
  <p>Zip: ${Zip}</p>
  <p>Company Email: ${rest["Company Email"]}</p>
  <p>Company Phone No: ${rest["Company Phone No"]}</p>
  <p>Personal No: ${rest["Personal No"]}</p>
  <p>Insurance Company Name: ${rest["Insurance Company Name"]}</p>
  <p>Factoring Company Name: ${rest["Factoring Company Name"]}</p>
  <p>Truck No: ${rest["Truck No"]}</p>
  <p>Driver Name: ${rest["Driver Name"]}</p>
  <p>Driver Number: ${rest["Driver Number"]}</p>
  <p>Trailer Number: ${rest["Trailer Number"]}</p>
  </div>

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

