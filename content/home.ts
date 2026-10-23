import aboutImage from "@/assets/images/about.jpg";
import brandsImage from "@/assets/images/brands.jpg";
import enterpriseImage from "@/assets/images/enterprise.jpg";
import heroImage from "@/assets/images/hero.jpg";
import pricingImage from "@/assets/images/pricing.jpg";
import supportImage from "@/assets/images/support.jpg";
import type { ProcessStep } from "@/components/sections/process-steps";
import type { ImageAsset } from "./types";
import { siteConfig } from "@/lib/site-config";

export type ExpertiseItem = {
  title: string;
  description: string;
  points: string[];
  image: ImageAsset;
};

export const hero = {
  title: {
    lead: "IT procurement",
    highlight: "without the runaround",
  },
  description:
    `${siteConfig.name} supplies software licenses, hardware, cloud and security products from the manufacturers you already use. You get one account manager, quotes within a business day, and renewals tracked before they're due.`,
  primaryCta: { label: "Get a quote", href: "/contact" },
  secondaryCta: { label: "View services", href: "/services" },
  highlights: [
    "Authorized reseller",
    "Quotes within 1 business day",
    "One point of contact",
  ],
  image: {
    src: heroImage,
    alt: "Rows of server racks with neatly routed network cabling",
  },
};

export const partnersIntro = {
  eyebrow: "Partners",
  title: "Authorized reseller for the brands you already use",
  cta: { label: "All partners", href: "/partners" },
};

export const about = {
  eyebrow: "About us",
  title: "A procurement team that works for you, not the vendor",
  paragraphs: [
    "Buying technology shouldn't mean juggling five suppliers and a dozen quotes. We source software, hardware, cloud and security products from leading manufacturers and handle the pricing, paperwork and delivery for you.",
    "We stay involved after the order ships. We keep track of your licenses, warranties and renewal dates, so an expired subscription or a surprise price increase never catches you off guard.",
  ],
  values: [
    "Vendor-neutral advice",
    "Full lifecycle management",
    "Itemized, transparent pricing",
    "Renewals tracked for you",
  ],
  cta: { label: "More about us", href: "/about" },
  image: {
    src: aboutImage,
    alt: "Two IT specialists working together at their monitors",
  },
};

export const servicesIntro = {
  eyebrow: "Services",
  title: "What we can help with",
  description:
    "Procurement, licensing and advice from one team that knows your environment.",
  cta: { label: "All services", href: "/services" },
  helpCard: {
    title: "Not sure what you need?",
    description:
      "Tell us what you're trying to solve and we'll recommend the right mix of products.",
    cta: { label: "Talk to us", href: "/contact" },
  },
};

export const expertiseIntro = {
  eyebrow: `Why ${siteConfig.name}`,
  title: "Why businesses choose us",
  description:
    `What changes when ${siteConfig.name} takes over your technology purchasing.`,
};

export const expertise: ExpertiseItem[] = [
  {
    title: "Sourcing at any scale",
    description:
      "From a laptop refresh for one department to infrastructure for several offices, we scope what you need, source it and coordinate the delivery.",
    points: [
      "Hardware, software, cloud and security in one order",
      "Single-site or multi-location rollouts",
    ],
    image: {
      src: enterpriseImage,
      alt: "Close-up of a patch panel with blue and grey network cables",
    },
  },
  {
    title: "Fair, benchmarked pricing",
    description:
      "Our vendor relationships mean better pricing on every order, and we check renewal quotes against the market before you sign anything.",
    points: [
      "Renewals compared with current market rates",
      "Line-by-line quotes with no hidden fees",
    ],
    image: {
      src: pricingImage,
      alt: "Laptop displaying a cost analytics dashboard",
    },
  },
  {
    title: "Genuine, warrantied products",
    description:
      "As an authorized reseller, everything we supply is authentic and covered by the full manufacturer warranty. No grey-market stock, ever.",
    points: [
      "Authorized status with leading manufacturers",
      "Full manufacturer warranty on every order",
    ],
    image: {
      src: brandsImage,
      alt: "Two business partners celebrating a successful agreement",
    },
  },
  {
    title: "Quick answers from real people",
    description:
      "You get a named account manager who knows your setup and your history. No ticket queues, no being passed around.",
    points: [
      "A dedicated account manager",
      "Most quotes back within one business day",
    ],
    image: {
      src: supportImage,
      alt: "Team collaborating around a table with laptops",
    },
  },
];

export const howItWorks = {
  eyebrow: "How it works",
  title: "From first call to renewal",
  steps: [
    {
      title: "Tell us what you need",
      description:
        "We ask about your environment, timeline and budget before recommending anything.",
    },
    {
      title: "Get a clear quote",
      description:
        "We compare options across vendors and send an itemized quote you can actually read.",
    },
    {
      title: "We handle delivery",
      description:
        "We place the order, track every shipment and keep you posted until it arrives.",
    },
    {
      title: "Stay covered",
      description:
        "We track licenses and warranties and get in touch well before anything renews.",
    },
  ] satisfies ProcessStep[],
};

export const ctaBanner = {
  title: "Need a quote?",
  description:
    "Send us your requirements, whether it's one license renewal or a full hardware refresh. We'll get back to you within one business day.",
  cta: { label: "Request a quote", href: "/contact" },
};
