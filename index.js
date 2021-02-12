const mailchimp = require("@mailchimp/mailchimp_marketing");
const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv').config();

const app = express();
var err = {};

app.use(express.static(path.join(__dirname, "main-website", "build")));
app.use(bodyParser.urlencoded({extended: true}));

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: "us17"
});
sgMail.setApiKey(process.env.SG_API_KEY);

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "main-website", "build", "/index.html"));
});
app.get("/work", (req,res) =>{
    res.sendFile(path.join(__dirname, "main-website", "build", "/index.html"));
});
app.get("/contact", (req,res) =>{
    res.sendFile(path.join(__dirname, "main-website", "build", "/index.html"));
});

app.post("/contact", (req, res) =>{
  const name = req.body.name;
  const email = req.body.email;
  const msg = req.body.msg;
  const listId = "d449b04783";

  async function run() {
    try{
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
          LNAME: name,
          MESSAGE: msg
        }
      });
      console.log(response);
      
      const msg1 = {
        to: email, // Change to your recipient
        from: 'jain.chirag0174@gmail.com', // Change to your verified sender
        subject: 'Response Submitted',
        html: `<h1>Success</h1><p>Hello ${name}, thanks for contacting me.</p><p>I will get in touch with you soon.</p>`,
      }
      const msg2 = {
        to: 'reenajain.rj10051976@gmail.com', // Change to your recipient
        from: 'jain.chirag0174@gmail.com', // Change to your verified sender
        subject: 'New Response',
        html: `<h1>Hello Chirag</h1><p>A new response came to you on your website.Find the details below:</p><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: </p><p>&nbsp;&nbsp;&nbsp;&nbsp;${msg}</p>`,
      }  
      sgMail
        .send(msg1)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
      })
      sgMail
        .send(msg2)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
    }catch(error){
      
      console.log(error);
      err = error;
      const msg = {
        to: email, // Change to your recipient
        from: 'jain.chirag0174@gmail.com', // Change to your verified sender
        subject: 'Response Submission Error',
        html: `<h1>ERROR!!</h1><p>Hello ${name}, there was some problem submitting your response.</p><p>Please Try Again Later</p><p>Error Details: </p><p>&nbsp;&nbsp;&nbsp;&nbsp;${JSON.parse(error.response.text).detail}</p>`
      }
      sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      });
    }
  }
    
  run();
  res.redirect("/contact");

});

app.get("/err", (req,res) =>{
  console.log(err);
  res.send(JSON.stringify(err));
});

app.listen(process.env.PORT || 5000, () => console.log("Server started at port 5000"));


  
//   async function run() {
//     const response = await mailchimp.ping.get();
//     console.log(response);
//   }