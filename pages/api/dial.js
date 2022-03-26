require('dotenv').config();

const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function dial(phoneNumber, message) {
    await client.calls
    .create({
        twiml: `
        <Response>
            <Pause length="1"/>
            <Say>
                ${message}
            </Say>
        </Response>`,
        to: phoneNumber,
        from: process.env.YOUR_TWILIO_NUMBER,
    });
}

async function handler(req, res) {
    if ( req.method === "POST" ) {
        const {phoneNumber, message} = req.body;
        await dial(phoneNumber, message);
        return res.status(200).send('dial success');
    }
    return res.status(422).send('method not supported');
};

export default handler;