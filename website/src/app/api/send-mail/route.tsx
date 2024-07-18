import { NextRequest, NextResponse } from 'next/server';
import * as sgMail from "@sendgrid/mail";

type EmailFormData = {
  text: string;
  firstName: string;
  lastName: string;
  email: string;
  bedrooms: number;
  moveIn: string;
};

export async function POST(req: NextRequest) {
  try {
    const { text, firstName, lastName, email, bedrooms, moveIn }: EmailFormData =
      await req.json();

    sgMail.setApiKey("");

    const msg = {
      to: "johnyrj97@gmail.com",
      from: email,
      subject: "You got mail",
      text: text,
    };
     await sgMail.send(msg);

    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
