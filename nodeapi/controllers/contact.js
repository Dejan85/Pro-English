const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.EMAIL);
console.log(process.env.PASSWORD);

exports.contact = (req, res) => {
  const email = req.body.email;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  const mailOption = {
    from: 'psyxad@gmail.com',
    to: 'xypnotica@gmail.com',
    subject: 'Testing and Testing',
    text: 'test'
  };

  transporter.sendMail(mailOption, function (err, data) {
    if (err) {
      console.log('Error Occures' + err);
    } else {
      console.log('Email sent!!!!');
    }
  });
};
