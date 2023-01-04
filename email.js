const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "",
    pass: "",
  }
});

const mailOptions = {
  from: 'hichammayat07@gmail.com',
  to: 'h.mayat@mundiapolis.ma',
  subject: 'From NodeJs',
  text: 'Hello World !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});