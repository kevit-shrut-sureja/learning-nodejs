const sgMail = require('@sendgrid/mail');
// 2nd one 
sgMail.setApiKey();

const msg = {
  // to: 'shrut.sureja@kevit.io',
  to: 'yihase2173@modotso.com',
  from: 'kevit.aayush.popat@gmail.com', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
//ES6
sgMail
  .send(msg)
  .then((data) => {
    console.log(data);
  }, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
