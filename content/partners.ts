import type { StaticImageData } from "next/image";
import adobe from "@/assets/partners/adobe.png";
import apc from "@/assets/partners/apc.png";
import aruba from "@/assets/partners/aruba-networks.png";
import barracuda from "@/assets/partners/barracuda.png";
import broadcom from "@/assets/partners/broadcom.png";
import dell from "@/assets/partners/dell-technologies.png";
import eaton from "@/assets/partners/eaton.png";
import eset from "@/assets/partners/eset.png";
import fortinet from "@/assets/partners/fortinet.png";
import kingston from "@/assets/partners/kingston.png";
import logitech from "@/assets/partners/logitech.png";
import microsoft from "@/assets/partners/microsoft.png";

export const partnerCategories = [
  "Software & Cloud",
  "Hardware",
  "Security",
  "Networking & Power",
] as const;

export type PartnerCategory = (typeof partnerCategories)[number];

export type Partner = {
  name: string;
  logo: StaticImageData;
  category: PartnerCategory;
  description: string;
};

export const partners: Partner[] = [
  {
    name: "Microsoft",
    logo: microsoft,
    category: "Software & Cloud",
    description:
      "Microsoft 365, Azure, Windows and server licensing for organizations of every size.",
  },
  {
    name: "Dell Technologies",
    logo: dell,
    category: "Hardware",
    description:
      "Business laptops, desktops, servers and storage built for demanding workloads.",
  },
  {
    name: "Fortinet",
    logo: fortinet,
    category: "Security",
    description:
      "FortiGate firewalls, secure SD-WAN and unified threat protection for the network edge.",
  },
  {
    name: "Adobe",
    logo: adobe,
    category: "Software & Cloud",
    description:
      "Creative Cloud, Acrobat and Document Cloud licensing for individuals and teams.",
  },
  {
    name: "Aruba Networks",
    logo: aruba,
    category: "Networking & Power",
    description:
      "Wireless access points, switches and cloud-managed networking for offices and campuses.",
  },
  {
    name: "Broadcom",
    logo: broadcom,
    category: "Software & Cloud",
    description:
      "VMware virtualization and infrastructure software for private and hybrid cloud.",
  },
  {
    name: "Logitech",
    logo: logitech,
    category: "Hardware",
    description:
      "Video conferencing equipment, keyboards, mice and headsets for the modern workplace.",
  },
  {
    name: "APC",
    logo: apc,
    category: "Networking & Power",
    description:
      "UPS systems, power distribution and rack infrastructure that keep equipment running.",
  },
  {
    name: "Barracuda",
    logo: barracuda,
    category: "Security",
    description:
      "Email protection, cloud backup and web application security.",
  },
  {
    name: "ESET",
    logo: eset,
    category: "Security",
    description:
      "Lightweight endpoint protection and threat detection for business devices.",
  },
  {
    name: "Eaton",
    logo: eaton,
    category: "Networking & Power",
    description:
      "Uninterruptible power supplies and power management for server rooms and data centers.",
  },
  {
    name: "Kingston",
    logo: kingston,
    category: "Hardware",
    description:
      "Memory, SSDs and USB storage for upgrades, refreshes and new builds.",
  },
];

export function partnersInCategory(category: PartnerCategory): Partner[] {
  return partners.filter((partner) => partner.category === category);
}
