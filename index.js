require("dotenv").config();
// Download the helper library from https://www.twilio.com/docs/node/install
const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const recipientNumber = process.env.RECIPENT_PHONE_NUMBER;
const client = twilio(accountSid, authToken);
console.log(accountSid, authToken, twilioNumber);
async function createMessage() {
  const message = await client.messages.create({
    body: "First message sent from Twilio, using Node.js",
    from: twilioNumber,
    to: recipientNumber,
  });

  console.log(message.body);
}

createMessage();
