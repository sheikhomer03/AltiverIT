import "server-only";

import { Resend } from "resend";
import type { ContactMessage } from "@/lib/contact-form";
import { siteConfig } from "@/lib/site-config";

/*
 * Sends contact form submissions through Resend (https://resend.com).
 * Configure it with the variables listed in .env.example.
 */

let client: Resend | undefined;

function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set. Add it to .env.local or the hosting environment.");
  }
  client ??= new Resend(apiKey);
  return client;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function messageRows(message: ContactMessage): [label: string, value: string][] {
  return [
    ["Name", message.name],
    ["Email", message.email],
    ["Company", message.company || "Not provided"],
    ["Phone", message.phone || "Not provided"],
    ["Topic", message.topic],
  ];
}

function renderText(message: ContactMessage): string {
  const rows = messageRows(message).map(([label, value]) => `${label}: ${value}`);
  return [...rows, "", "Message:", message.message].join("\n");
}

function renderHtml(message: ContactMessage): string {
  const rows = messageRows(message)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 16px 4px 0;color:#4a5a82;vertical-align:top">${label}</td><td style="padding:4px 0;color:#0a214f">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.5">
<h2 style="margin:0 0 16px;color:#0a214f">New enquiry from the ${siteConfig.name} website</h2>
<table style="border-collapse:collapse">${rows}</table>
<h3 style="margin:24px 0 8px;color:#0a214f">Message</h3>
<p style="margin:0;color:#0a214f;white-space:pre-wrap">${escapeHtml(message.message)}</p>
</div>`;
}

/** Emails a validated contact form message to the sales inbox. Throws if Resend rejects it. */
export async function sendContactEmail(message: ContactMessage): Promise<void> {
  const from = process.env.CONTACT_FROM_EMAIL ?? `${siteConfig.name} Website <website@altivexit.com>`;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email;

  const { error } = await getResend().emails.send({
    from,
    to,
    replyTo: message.email,
    subject: `${message.topic}: ${message.name}${message.company ? ` (${message.company})` : ""}`,
    text: renderText(message),
    html: renderHtml(message),
  });

  if (error) {
    throw new Error(`Resend rejected the contact email: ${error.name}: ${error.message}`);
  }
}
