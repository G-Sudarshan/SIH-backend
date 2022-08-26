

const sendSMS = (req, res) => {
    const accountSid = process.env.SID; 
    const authToken = process.env.AUTH_TOKEN; 
    const client = require('twilio')(accountSid, authToken); 
     
    client.messages 
          .create({ 
             body: 'From NodeJS Hello Sudarshan, We found your profile interesting and would like consider you for SDE Intern role at our company. Kindly contact hr@mycompany.com to initiate the recruitment process. ',  
             messagingServiceSid: process.env.MESSAGE_SID,      
             to: process.env.TO
           }) 
          .then(message => console.log(message.sid)) 
          .done();
  };
  
  module.exports = { sendSMS };
  