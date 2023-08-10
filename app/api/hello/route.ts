import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { config } from "@/config";

type EmailRequestBody = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  // return NextResponse.json({ message: "Hello from the other side" });

  const body = await request.json();
  const { name, phone, email, message } = body as EmailRequestBody; // Type assertion here

  // Create a transporter using Fluent SMTP plugin settings
  const transporter = nodemailer.createTransport({
    host: "send.one.com",
    port: 465,
    secure: true,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPassword,
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: config.smtpUser,
      to: config.smtpUser,
      subject: "New contact form submission",
      html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });
    // res.status(200).json({ message: 'Email sent successfully' });
    return NextResponse.json({ message: "message sent" }, { status: 200 });
  } catch (error) {
    // res.status(500).json({ message: "Failed to send email" });
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
