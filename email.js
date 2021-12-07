"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");

async function sendEmail(email) {
    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD
        }
    });

    const info = await transporter.sendMail({
        from: process.env.USER,
        to: "shegde111@gmail.com",
        cc: email.sender || "",
        subject: email.subject,
        html:  `
            <div>
                <p>${email.body}</p>
                <br />
                <p>Sincerely,</p>
                <p>${email.name}</p>
            </div>
        `
    });

    console.log(`Message sent: ${info.messageId}`);
}

module.exports = { sendEmail };