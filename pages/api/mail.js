export default function handler(req, res) {
    // setup
    const sendgrid = require("@sendgrid/mail");
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

    // build email
    const body = req.body;
    const data = {
        to: "emilsthoughts@t-online.de",
        from: "emil.raedsch@gmail.com",
        subject: "dnwuadiwa",
        text: "dnuwdwui",
    };

    // send email
    sendgrid.send(data);
    res.status(200).json({ status: "ok" });
}
