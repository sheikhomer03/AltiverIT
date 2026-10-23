import cloudImage from "@/assets/images/service-cloud.jpg";
import hardwareImage from "@/assets/images/service-hardware.jpg";
import securityImage from "@/assets/images/service-security.jpg";
import licensingImage from "@/assets/images/licensing.jpg";
import type { IconName } from "@/components/ui/icon";
import type { PartnerCategory } from "./partners";
import type { ImageAsset } from "./types";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: IconName;
  /** Short points for compact cards. */
  highlights: string[];
  /** Longer copy for the services page. */
  details: string;
  included: string[];
  /** Partner category whose brands are shown alongside the service. */
  partnerCategory: PartnerCategory;
  image: ImageAsset;
};

export const services: Service[] = [
  {
    slug: "software-licensing",
    title: "Software Licensing & Renewals",
    summary:
      "Right-sized licenses across every major publisher, with renewal dates tracked for you so nothing lapses or auto-renews at the wrong price.",
    icon: "license",
    highlights: [
      "New licenses, add-ons and true-ups",
      "Renewal tracking and early reminders",
      "License reviews to cut unused seats",
    ],
    details:
      "Licensing gets complicated fast: different publishers, different terms and renewal dates scattered across the year. We bring it all into one place. We buy what you need at the right tier, keep a record of every agreement and contact you well before anything renews, with a market comparison in hand.",
    included: [
      "New subscriptions, add-ons and upgrades",
      "A renewal calendar with advance reminders",
      "True-ups and compliance reviews",
      "Right-sizing to remove unused seats",
      "Renewal pricing checked against the market",
    ],
    partnerCategory: "Software & Cloud",
    image: {
      src: licensingImage,
      alt: "Developer workstation with multiple monitors and a laptop",
    },
  },
  {
    slug: "hardware-procurement",
    title: "Hardware Procurement",
    summary:
      "Servers, laptops, networking and peripherals sourced at negotiated pricing and delivered ready for your team to deploy.",
    icon: "server",
    highlights: [
      "Laptops, desktops and peripherals",
      "Servers, storage and networking",
    ],
    details:
      "From a handful of laptops to a full server refresh, we source the right equipment at negotiated pricing and coordinate everything up to delivery. Devices can arrive configured, labeled and ready for your team to hand out.",
    included: [
      "Laptops, desktops, monitors and peripherals",
      "Servers, storage and networking equipment",
      "Volume pricing through vendor programs",
      "Configuration, imaging and asset tagging",
      "Delivery coordination across multiple sites",
    ],
    partnerCategory: "Hardware",
    image: {
      src: hardwareImage,
      alt: "Laptop and monitor on a tidy desk beside a bright window",
    },
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Solutions",
    summary:
      "Layered protection from the endpoint to the network edge, built around proven vendors and a zero-trust mindset.",
    icon: "shield",
    highlights: ["Endpoint and email protection", "Firewalls and backup"],
    details:
      "Good security is layered. We help you choose and deploy protection that fits your risk profile and your budget, from endpoint and email security to firewalls, network segmentation and backup you can actually restore from.",
    included: [
      "Endpoint protection and EDR",
      "Email security and filtering",
      "Next-generation firewalls and secure SD-WAN",
      "Identity and access management",
      "Backup and disaster recovery",
    ],
    partnerCategory: "Security",
    image: {
      src: securityImage,
      alt: "Padlock resting on an illuminated laptop keyboard",
    },
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    summary:
      "Plan, migrate and fine-tune Microsoft 365, Azure and hybrid environments so you only pay for what you actually use.",
    icon: "cloud",
    highlights: ["Microsoft 365 and Azure", "Migration and cost reviews"],
    details:
      "Whether you're moving to Microsoft 365 for the first time or tidying up an existing Azure tenant, we plan the migration, handle the licensing and help you keep costs under control once you're live.",
    included: [
      "Microsoft 365 and Azure licensing",
      "Migration planning and phased cutovers",
      "Hybrid and multi-cloud environments",
      "Regular usage and cost reviews",
      "Ongoing license management",
    ],
    partnerCategory: "Software & Cloud",
    image: {
      src: cloudImage,
      alt: "Laptop showing a cloud usage dashboard with charts",
    },
  },
];

export function serviceHref(slug: string): string {
  return `/services#${slug}`;
}
