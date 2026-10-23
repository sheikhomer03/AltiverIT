import { contactTopics, type ContactTopic } from "@/content/contact";

export const contactFields = ["name", "email", "company", "phone", "topic", "message"] as const;

export type ContactField = (typeof contactFields)[number];

export type ContactMessage = {
  name: string;
  email: string;
  company: string;
  phone: string;
  topic: ContactTopic;
  message: string;
};

export type ContactFormState = {
  status: "idle" | "success" | "error";
  /** Field-level errors, keyed by field name. */
  errors?: Partial<Record<ContactField, string>>;
  /** Submitted values, returned on error so the form can be refilled. */
  values?: Partial<Record<ContactField, string>>;
  /** Form-level error message. */
  message?: string;
};

/** Hidden field that real users never fill in; bots usually do. */
export const HONEYPOT_FIELD = "website";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+()\-.\s\d]{7,25}$/;

function readField(formData: FormData, field: ContactField): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function isContactTopic(value: string): value is ContactTopic {
  return (contactTopics as readonly string[]).includes(value);
}

type ValidationResult =
  | { ok: true; data: ContactMessage }
  | { ok: false; errors: Partial<Record<ContactField, string>>; values: Record<ContactField, string> };

export function validateContactForm(formData: FormData): ValidationResult {
  const values = Object.fromEntries(
    contactFields.map((field) => [field, readField(formData, field)]),
  ) as Record<ContactField, string>;

  const errors: Partial<Record<ContactField, string>> = {};

  if (values.name.length < 2) errors.name = "Please enter your name.";
  else if (values.name.length > 100) errors.name = "Name is too long.";

  if (!EMAIL_PATTERN.test(values.email)) errors.email = "Please enter a valid email address.";

  if (values.company.length > 120) errors.company = "Company name is too long.";

  if (values.phone && !PHONE_PATTERN.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!isContactTopic(values.topic)) errors.topic = "Please choose a topic.";

  if (values.message.length < 10) {
    errors.message = "Please add a few more details (at least 10 characters).";
  } else if (values.message.length > 5000) {
    errors.message = "Message is too long (5,000 characters max).";
  }

  if (Object.keys(errors).length > 0 || !isContactTopic(values.topic)) {
    return { ok: false, errors, values };
  }

  return { ok: true, data: { ...values, topic: values.topic } };
}
