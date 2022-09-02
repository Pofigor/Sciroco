const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'sciroco_thewayoflive@mail.ru',
      pass: 'K19w91cW859rt35ybhuY',
    },
  },
  {
    from: 'Sciroco <sciroco_thewayoflive@mail.ru>',
  },
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email send', info);
  });
};

module.exports = mailer;
