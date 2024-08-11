import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, email }: { firstName: string; email: string } =
    await req.json();

  if (!firstName && !email) {
    return NextResponse.json({
      message: "Please mention all the requried fields",
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "RANA IT Consultant <welcome@ranaitconsultant.com>",
      to: [email],
      subject: `Thank You for Reaching Out! ${firstName}`,
      react: EmailTemplate({ firstName: firstName }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
