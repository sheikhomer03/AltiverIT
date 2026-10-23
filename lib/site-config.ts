export type NavItem = {
  label: string;
  href: string;
};

const brandName = "AltivexIT";

export const siteConfig = {
  name: brandName,
  // TODO: update url and contact email once the AltivexIT domain is confirmed.
  url: "https://www.techrynex.com",
  description: `${brandName} helps businesses buy, renew and manage enterprise technology: software licensing, hardware, cloud and cybersecurity through one point of contact.`,
  contact: {
    phone: {
      display: "+1 (307) 449-2961",
      href: "tel:+13074492961",
    },
    email: "procurement@techrynex.com",
    address: {
      street: "1001 S. Main St. STE 500",
      locality: "Kalispell, MT 59901",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=1001+S.+Main+St.+STE+500,+Kalispell,+MT+59901",
    },
    hours: "Monday to Friday, 9:00 AM to 6:00 PM",
    responseTime: "We reply within one business day.",
  },
} as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Partners", href: "/partners" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const companyNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Partners", href: "/partners" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];
