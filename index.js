
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sendEmail, sendQuote } = require("./email");

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

// post email
app.post('/', async (req, res) => {
    try {
        await sendEmail(req.body);
        res.status(200).send("Email sent successfully.");
    }
    catch (err) {
        res.status(500).send(`Email failed to send. error = ${err}`)
    }
});

app.post('/quote', async (req, res) => {
    try {
        await sendQuote(req.body);
        res.status(200).send("Quote request sent successfully.");
    } catch (err) {
        res.status(500).send(`Quote request failed to send. error = ${err}`)
    }
})

// port listener
app.listen(port, () => {
    console.log(`Listening at port: ${port}`);
});