// server.mjs (project root)
import express from "express";
import cors from "cors";
import { Resend } from "resend";
import { z } from "zod";

const app = express();
app.use(cors());
app.use(express.json({ type: ["application/json", "application/*+json"] }));

// For quick local testing you can hardcode (DON'T commit this):
// const resend = new Resend("re_your_resend_key_here");
const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(255),
    message: z.string().trim().min(1).max(1000),
    botField: z.string().optional(),
});

function escapeHtml(s) {
    return s
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

app.post("/api/contact", async (req, res) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: "Invalid payload" });

    const { name, email, message, botField } = parsed.data;
    if (botField?.trim()) return res.json({ ok: true }); // honeypot

    try {
        const resp = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>", // change after verifying your domain
            to: ["EshvynGames@gmail.com"],
            subject: `New contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            html: `<div style="font-family: system-ui; line-height:1.5">
               <p><b>Name:</b> ${escapeHtml(name)}</p>
               <p><b>Email:</b> ${escapeHtml(email)}</p>
               <p><b>Message:</b></p>
               <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
             </div>`,
            reply_to: email,
        });

        if (resp.error) return res.status(502).json({ error: "Failed to send" });
        res.json({ ok: true, id: resp.data?.id ?? null });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Unexpected error" });
    }
});

// For GETs to /api/contact from the browser:
app.use("/api/contact", (_req, res) => res.status(405).json({ error: "Method not allowed" }));

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => console.log(`API running → http://localhost:${PORT}`));
