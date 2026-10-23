"use server";

import { contactPage } from "@/content/contact";
import { sendContactEmail } from "@/lib/contact-email";
import {
  HONEYPOT_FIELD,
  validateContactForm,
  type ContactFormState,
} from "@/lib/contact-form";

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
    await sendContactEmail(result.data);
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
