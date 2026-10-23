"use server";

import { contactPage } from "@/content/contact";
import {
  HONEYPOT_FIELD,
  validateContactForm,
  type ContactFormState,
  type ContactMessage,
} from "@/lib/contact-form";

/**
 * Hands a validated message to its destination.
 *
 * TODO: connect an email or CRM provider (e.g. Resend, Postmark, Zoho CRM)
 * before launch. Until then, messages are only written to the server log.
 */
async function deliverContactMessage(message: ContactMessage): Promise<void> {
  console.info("[contact] New message", {
    name: message.name,
    email: message.email,
    company: message.company,
    topic: message.topic,
  });
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Silently accept bot submissions so they get no signal to retry.
  if (formData.get(HONEYPOT_FIELD)) {
    return { status: "success" };
  }

  const result = validateContactForm(formData);
  if (!result.ok) {
    return {
      status: "error",
      errors: result.errors,
      values: result.values,
      message: contactPage.form.error,
    };
  }

  try {
    await deliverContactMessage(result.data);
  } catch (error) {
    console.error("[contact] Delivery failed", error);
    return {
      status: "error",
      values: result.data,
      message: contactPage.form.failure,
    };
  }

  return { status: "success" };
}
