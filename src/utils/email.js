const DOMAIN = "g-sudarshan.me";
const API_KEY = "6c0b9b19ad03ba59bb1d72f5e1042fb8-c76388c3-30e3294d";

var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

const sendMail = ({ from, to, subject, text }) => {
  const data = {
    from: "Microsoft <microsoftcorp631@gmail.com>",
    to: to,
    subject: subject,
    text: text,
  };

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
    } else {
      console.log(body);
    }
  });
};

module.exports = { sendMail };
