const nodemailer = require('nodemailer')

const passwordReset = async ( email, subject, text ) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
            port: 587,
            secure: true,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
    })
  } catch(err) {
    console.log(err, 'email not sent')
  }
}

module.exports = passwordReset