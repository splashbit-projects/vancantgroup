import { NextResponse, NextRequest } from "next/server";
const sgMail = require("@sendgrid/mail");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { name, email, phone, project, description, date, service } =
      bodyJSON;

    // Initialize SendGrid with API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Set up email data
    const msg = {
      to: "noreply@vancantgroup.com",
      from: "noreply@vancantgroup.com",
      subject: `${service} order`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService name: ${service}\nProject name: ${project}\nPreferred start date: ${date}\nProject description: ${description}\n`,
    };

    // Send email
    await sgMail.send(msg);

    return NextResponse.json({ success: true, message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "COULD NOT SEND MESSAGE" }, { status: 500 });
  }
}
