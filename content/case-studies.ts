import financeImage from "@/assets/images/case-finance.jpg";
import healthcareImage from "@/assets/images/case-healthcare.jpg";
import manufacturingImage from "@/assets/images/case-manufacturing.jpg";
import retailImage from "@/assets/images/case-retail.jpg";
import type { ImageAsset } from "./types";
import { siteConfig } from "@/lib/site-config";

/*
 * Client names and results are taken from the case studies on the current
 * techrynex.com website. Confirm each one with the client before launch.
 */

export type CaseStudyResult = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  service: string;
  title: string;
  summary: string;
  results: CaseStudyResult[];
  image: ImageAsset;
};

export const caseStudiesPage = {
  metadata: {
    title: "Case Studies",
    description:
      `Server refreshes, zero-trust rollouts, Microsoft 365 migrations and multi-site hardware projects delivered by ${siteConfig.name}.`,
  },
  header: {
    eyebrow: "Case studies",
    title: "Real projects with results you can measure",
    description:
      "A look at the kind of procurement and technology work we deliver, from single-site refreshes to rollouts across dozens of locations.",
  },
  labels: {
    client: "Client",
    results: "Results",
  },
  cta: {
    title: "Planning something similar?",
    description:
      "Tell us about your project and timeline. We'll explain how we'd approach it and what it would cost.",
    cta: { label: "Start a conversation", href: "/contact" },
  },
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ferrowest-server-refresh",
    client: "Ferrowest Manufacturing Co.",
    industry: "Manufacturing",
    service: "Hardware Procurement",
    title: "A server refresh across three plants, without stopping production",
    summary:
      "Ferrowest needed to replace ageing servers at three facilities without disrupting the production schedule. We sourced and staged the new hardware, then planned each cutover around the plant calendar.",
    results: [
      { value: "40%", label: "Lower hardware spend than their previous refresh" },
      { value: "0", label: "Hours of unplanned downtime during cutover" },
    ],
    image: {
      src: manufacturingImage,
      alt: "Rows of server cabinets in a bright, modern data center",
    },
  },
  {
    slug: "brightfield-zero-trust",
    client: "Brightfield Healthcare Network",
    industry: "Healthcare",
    service: "Cybersecurity",
    title: "Zero-trust security for 12 clinical sites",
    summary:
      "With compliance requirements tightening, Brightfield needed the same level of protection at every clinic. We designed and rolled out a zero-trust architecture across the network and brought every endpoint under EDR coverage.",
    results: [
      { value: "100%", label: "Of endpoints covered by EDR" },
      { value: "1st", label: "Review passed in their compliance audit" },
    ],
    image: {
      src: healthcareImage,
      alt: "Clinician typing on a laptop with a stethoscope on the desk",
    },
  },
  {
    slug: "ashgrove-microsoft-365",
    client: "Ashgrove Financial Group",
    industry: "Financial services",
    service: "Cloud Solutions",
    title: "Moving 800+ mailboxes to Microsoft 365",
    summary:
      "Ashgrove was running ageing on-premises email and file shares. We planned a phased migration to Microsoft 365 so staff could keep working normally throughout the move.",
    results: [
      { value: "800+", label: "Users migrated with no data loss" },
      { value: "22%", label: "Lower annual IT overhead" },
    ],
    image: {
      src: financeImage,
      alt: "Glass office towers seen from street level",
    },
  },
  {
    slug: "northgate-store-rollout",
    client: "Northgate Retail Group",
    industry: "Retail",
    service: "Hardware Procurement",
    title: "POS and networking rollout to 60 stores",
    summary:
      "Northgate wanted every store on the same point-of-sale and networking setup, on a tight deadline. We standardized the hardware, coordinated delivery to each location and gave them one contact for the entire project.",
    results: [
      { value: "60", label: "Store locations outfitted" },
      { value: "< 8 wks", label: "From kickoff to the final store" },
    ],
    image: {
      src: retailImage,
      alt: "Retail clothing store interior with stocked shelves",
    },
  },
];
