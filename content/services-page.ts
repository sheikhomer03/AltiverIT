import type { ProcessStep } from "@/components/sections/process-steps";
import { siteConfig } from "@/lib/site-config";

export const servicesPage = {
  metadata: {
    title: "Services",
    description:
      `Software licensing and renewals, hardware procurement, cybersecurity and cloud solutions from one dedicated team at ${siteConfig.name}.`,
  },
  header: {
    eyebrow: "Services",
    title: "Everything you need to buy, run and renew your IT",
    description:
      "Procurement, licensing and practical advice under one roof. One team, one point of contact and one invoice trail you can actually follow.",
  },
  labels: {
    included: "What's included",
    brands: "Brands we supply",
    cta: "Get a quote",
  },
  process: {
    eyebrow: "Our process",
    title: "A straightforward path from quote to support",
    steps: [
      {
        title: "Discovery",
        description:
          "We review your current setup, contracts and goals so our advice fits how you actually work.",
      },
      {
        title: "Proposal",
        description:
          "You get an itemized plan and a competitive quote, with options where they make sense.",
      },
      {
        title: "Delivery",
        description:
          "We manage ordering, configuration and shipping, and keep you updated at every step.",
      },
      {
        title: "Ongoing support",
        description:
          "Your account team stays with you for renewals, changes and anything that comes up.",
      },
    ] satisfies ProcessStep[],
  },
  cta: {
    title: "Not sure where to start?",
    description:
      "Tell us what you're working on and we'll suggest the right mix of products and services, with no obligation.",
    cta: { label: "Talk to our team", href: "/contact" },
  },
};
