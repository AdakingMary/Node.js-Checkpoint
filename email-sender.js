import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "adakingmary@gmail.com",
    pass: "aodu hgdt eejf hzbf",
  },
});

const mailOptions = {
  from: "adakingmary@gmail.com",
  to: "adakingmaryforbusiness@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
