import nodemailer from "nodemailer";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

const defaultRecipients = ["bagnbags70@gmail.com"];

function parseRecipients(raw: string | undefined) {
  const list = (raw ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  return list.length ? list : defaultRecipients;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipients = parseRecipients(process.env.CONTACT_RECIPIENTS);

    if (!smtpUser || !smtpPass) {
      return Response.json(
        { error: "Email sending is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"Website Contact Form" <${smtpUser}>`,
      to: recipients,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, "", "Message:", message].join(
        "\n"
      ),
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Unable to send message right now. Please try again." },
      { status: 500 }
    );
  }
}

