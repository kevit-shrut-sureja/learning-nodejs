const { MailtrapClient } = require("mailtrap");

/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */
const TOKEN = "9865859ea838b23410cb1373de64a0ae";
const ENDPOINT = "https://send.api.mailtrap.io/";
const SENDER_EMAIL = "mailtrap@demomailtrap.com";


const sender = {
    email: "mailtrap@demomailtrap.com",
    name: "Mailtrap Test",
  };
  const recipients = [
    {
      email: "yihase2173@modotso.com",
    }
  ];
  
const sendWelcomeEmail = async (email, name) =>{
    try {
        const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });
        const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };
        await client
            .send({
                from: sender,
                to: recipients,
                subject: "Hello from Mailtrap!",
                text: `Welcome to task manager app ${name}`,
                category: "Integration Test"
            })    

    } catch (error) {
        console.log(error);
        throw new Error("Error in sending main")
    }
}

module.exports = { sendWelcomeEmail }