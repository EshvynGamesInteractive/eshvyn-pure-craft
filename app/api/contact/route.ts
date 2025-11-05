// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(255),
    message: z.string().trim().min(1).max(1000),
    botField: z.string().optional(), // honeypot
});

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(s: string) {
    return s
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
        }

        const { name, email, message, botField } = parsed.data;

        // Honeypot: if filled, treat as success but skip sending
        if (botField && botField.trim()) {
            return NextResponse.json({ ok: true });
        }

        const subject = `New contact from ${name}`;
        const text = `New contact message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height:1.6; color:#111;">
        <h2 style="margin:0 0 12px 0;">New contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="white-space:pre-wrap"><strong>Message:</strong><br>${escapeHtml(message)}</p>
      </div>
    `;

        const resp = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>", // TODO: change to your verified sender
            to: ["EshvynGames@gmail.com"],
            subject,
            text,
            html,
            replyTo: email,
        });

        if (resp.error) {
            console.error("Resend error:", resp.error);
            return NextResponse.json({ error: "Failed to send" }, { status: 502 });
        }

        return NextResponse.json({ ok: true, id: resp?.data?.id ?? null });
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }
}
