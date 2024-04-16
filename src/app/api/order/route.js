import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      name,
      email,
      phone,
      project,
      description,
      date,
      service,
    } = bodyJSON;

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "noreply@vancantgroup.com", // Your Gmail email
        pass: "&N4AV<KZmMHP3hC<hjj", // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false // This bypasses the certificate validation
      }
    });

    // Set up email data
    const mailOptions = {
      from: '"Vancant Group" <noreply@vancantgroup.com>', // Sender address
      to: "noreply@vancantgroup.com", // Change to your recipient's email
      subject: `${service} order`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService name: ${service}\nProject name: ${project}\nPreferred start date: ${date}\nProject description: ${description}\n`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
