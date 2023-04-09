const nodemailer = require('nodemailer')

const passwordReset = async ( email, subject, link ) => {
  try {
    console.log(email, subject, link )
    console.log('***')
    console.log(process.env.USER, )
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
    transporter.verify().then(console.log).catch(console.error)
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: link,
    })
    console.log('email sent successfully')
  } catch(err) {
    console.log(err, 'email not sent')
  }
}

module.exports = passwordReset