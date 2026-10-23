import type { IconName } from "@/components/ui/icon";
import { siteConfig } from "@/lib/site-config";

type Benefit = {
  icon: IconName;
  title: string;
  description: string;
};

export const partnersPage = {
  metadata: {
    title: "Our Partners",
    description:
      `${siteConfig.name} is an authorized reseller for Microsoft, Dell Technologies, Fortinet, Adobe and other leading manufacturers across software, hardware, security and networking.`,
  },
  header: {
    eyebrow: "Our partners",
    title: "Brands you already trust, bought through one partner",
    description:
      "We're an authorized reseller for leading hardware, software, cloud and security manufacturers. That means genuine products, full warranties and pricing backed by real vendor relationships.",
  },
  benefits: {
    eyebrow: "Why it matters",
    title: "What you get from an authorized partner",
    description:
      "Buying through the manufacturer's official channel protects you long after the invoice is paid.",
    items: [
      {
        icon: "badge",
        title: "Genuine products",
        description:
          "Stock comes straight through the official channel. Never grey-market, never refurbished sold as new.",
      },
      {
        icon: "shield",
        title: "Full manufacturer warranty",
        description:
          "Every product carries the complete warranty and is eligible for the vendor's own support.",
      },
      {
        icon: "scale",
        title: "Partner program pricing",
        description:
          "Deal registration, volume tiers and partner promotions help bring your cost down.",
      },
      {
        icon: "users",
        title: "A partner who can escalate",
        description:
          "We work with vendor channel teams to sort out licensing and warranty issues faster.",
      },
    ] satisfies Benefit[],
  },
  directory: {
    eyebrow: "Partner directory",
    title: "Who we work with",
    allLabel: "All partners",
  },
  cta: {
    title: "Don't see the brand you need?",
    description:
      "We source from many more manufacturers than we list here. Send us the make and model and we'll track it down.",
    cta: { label: "Ask about a brand", href: "/contact" },
  },
};
