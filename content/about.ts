import teamImage from "@/assets/images/about-team.jpg";
import type { IconName } from "@/components/ui/icon";
import { siteConfig } from "@/lib/site-config";

type Value = {
  icon: IconName;
  title: string;
  description: string;
};

export const aboutPage = {
  metadata: {
    title: "About Us",
    description:
      `${siteConfig.name} is an independent IT procurement and licensing partner helping businesses buy, renew and manage enterprise technology through one point of contact.`,
  },
  header: {
    eyebrow: "About us",
    title: "Technology buying should be simple, transparent and personal",
    description:
      "We believe procurement should be handled by people who understand your business, not by whoever happens to answer a vendor's sales line.",
  },
  story: {
    eyebrow: "Our story",
    title: "An independent partner for IT procurement",
    paragraphs: [
      `${siteConfig.name} is an independent IT procurement and licensing partner. We work with global technology manufacturers to supply software subscriptions, license renewals, cloud services, cybersecurity products and enterprise hardware, all through a single point of contact.`,
      "Filling purchase orders is only part of the job. We help clients get more from what they spend, keep track of every asset across its lifecycle and plan ahead for renewals and refreshes, so technology stays an investment rather than a recurring headache.",
    ],
    image: {
      src: teamImage,
      alt: `${siteConfig.name} team meeting around a conference table`,
    },
  },
  /* Figures are taken from the current techrynex.com website. Confirm with the client before launch. */
  stats: [
    { value: "10+", label: "Years in business" },
    { value: "200+", label: "Clients served" },
    { value: "20+", label: "Vendor relationships" },
  ],
  purpose: [
    {
      label: "Our mission",
      icon: "users",
      statement:
        "To simplify how businesses buy technology through transparent pricing, trusted vendor partnerships and a team that treats every client relationship as a long-term one.",
    },
    {
      label: "Our vision",
      icon: "refresh",
      statement:
        "To be the procurement partner organizations call first, known for making enterprise IT purchasing straightforward and dependable.",
    },
  ] satisfies { label: string; icon: IconName; statement: string }[],
  values: {
    eyebrow: "What we value",
    title: "How we work with every client",
    items: [
      {
        icon: "scale",
        title: "Transparency",
        description:
          "Itemized quotes, clear terms and honest advice, even when the answer is to buy less.",
      },
      {
        icon: "clock",
        title: "Responsiveness",
        description:
          "Quick replies from people who know your account, not a queue that starts from scratch.",
      },
      {
        icon: "badge",
        title: "Expertise",
        description:
          "Practical knowledge of licensing models, hardware and security from vendors we work with every day.",
      },
      {
        icon: "refresh",
        title: "Long-term thinking",
        description:
          "We plan for renewals and refreshes ahead of time instead of reacting when they're due.",
      },
    ] satisfies Value[],
  },
  cta: {
    title: "Let's see how we can help",
    description:
      "Whether it's a single renewal or a full refresh, we'd be glad to hear what you're working on.",
    cta: { label: "Get in touch", href: "/contact" },
  },
};
