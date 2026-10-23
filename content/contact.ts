import { siteConfig } from "@/lib/site-config";

export const contactTopics = [
  "Request a quote",
  "License renewal review",
  "Hardware procurement",
  "Cybersecurity",
  "Cloud & Microsoft 365",
  "Something else",
] as const;

export type ContactTopic = (typeof contactTopics)[number];

export const contactPage = {
  metadata: {
    title: "Contact Us",
    description:
      `Request a quote, review an upcoming renewal or ask about a project. ${siteConfig.name} replies within one business day.`,
  },
  header: {
    eyebrow: "Contact",
    title: "Let's talk about what you need",
    description:
      "Whether it's a quote, a renewal review or a question about what's possible, send us a message and the right person will get back to you.",
  },
  details: {
    title: "Get in touch directly",
    labels: {
      phone: "Phone",
      email: "Email",
      address: "Office",
      hours: "Business hours",
      directions: "Get directions",
    },
  },
  form: {
    title: "Send us a message",
    description: "Fields marked with an asterisk are required.",
    fields: {
      name: { label: "Full name", placeholder: "Jane Smith" },
      email: { label: "Work email", placeholder: "jane@company.com" },
      company: { label: "Company", placeholder: "Company name" },
      phone: { label: "Phone", placeholder: "+1 (555) 000-0000" },
      topic: { label: "What can we help with?" },
      message: {
        label: "Message",
        placeholder: "Tell us about your requirements, quantities or deadlines.",
      },
    },
    submit: "Send message",
    submitting: "Sending...",
    success: {
      title: "Thanks, your message is on its way.",
      description: "We'll get back to you within one business day.",
    },
    error: "Please fix the highlighted fields and try again.",
    failure: "Something went wrong on our side. Please try again or email us directly.",
  },
};
