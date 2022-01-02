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
        sendEmail(req.body);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Email failed to send.")
    }

    res.status(200).send("Email sent successfully.");
});

app.post('/quote', async (req, res) => {
    try {
        sendQuote(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).send("Quote request failed to send.")
    }
    
    res.status(200).send("Quote request sent successfully.");
})

// port listener
app.listen(port, () => {
    console.log(`Listening at port: ${port}`);
});