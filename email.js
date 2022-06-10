"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");

async function sendEmail(email) {
    try {
        const transporter = nodemailer.createTransport({
            service: "Outlook365",
            auth: {
                user: process.env.USER,
                pass: process.env.PASSWORD
            }
        });
    
        const info = await transporter.sendMail({
            from: process.env.USER,
            to: "shegde111@gmail.com",
            subject: email.subject,
            html: `
                <div>
                    <p>${email.body}</p>
                    <br />
                    <p>Sincerely,</p>
                    <p>${email.name} (${email.sender})</p>
                </div>
            `
        });
    
        console.log(`Message sent: ${info.messageId}`);
    } catch (err) {
        console.log(err);
    }
}

async function sendQuote(email) {
    email["body"] = `I would like to get a quote about ${email.quote}.`;
    if (email.phone != null) {
        email["body"] += ` My phone number is ${email.phone}`
    }
    email["subject"] = `New Quote Request - ${email.quote}: ${email.name}`
    sendEmail(email);
}

module.exports = { sendEmail, sendQuote };