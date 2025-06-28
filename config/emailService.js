const nodemailer = require("nodemailer");
const http = require("http");

const transporter = nodemailer.createTransport({
  http: "smtp.gmail.com",
  port: 445,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(to, subject, text, html) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to,
      subject,
      text,
      html,
    });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email: ", error);
    return { success: false, error: error.message };
  }
}
module.exports = { sendEmail };
