import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
import { serviceHref, services } from "@/content/services";
import { companyNav, siteConfig } from "@/lib/site-config";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

const linkClasses = "text-[0.9375rem] text-white/80 transition-colors hover:text-white";

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-bold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.href + link.label}>
          <Link href={link.href} className={linkClasses}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactItem({ icon, children }: { icon: IconName; children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <Icon name={icon} className="mt-1 size-4 text-brand-300" />
      <span className="min-w-0 break-words">{children}</span>
    </li>
  );
}

export function SiteFooter() {
  const { phone, email, address } = siteConfig.contact;
  const serviceLinks = services.map((service) => ({
    label: service.title,
    href: serviceHref(service.slug),
  }));

  return (
    <footer className="bg-ink-900 text-white/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-4 lg:pr-10">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm leading-relaxed">
            Software licensing, hardware, cloud and security, sourced and
            renewed by one dedicated team.
          </p>
        </div>

        <div className="lg:col-span-3">
          <FooterColumn title="Services">
            <LinkList links={serviceLinks} />
          </FooterColumn>
        </div>

        <div className="lg:col-span-2">
          <FooterColumn title="Company">
            <LinkList links={companyNav} />
          </FooterColumn>
        </div>

        <div className="sm:col-span-2 lg:col-span-3">
          <FooterColumn title="Contact">
            <ul className="space-y-3 text-[0.9375rem]">
              <ContactItem icon="phone">
                <a href={phone.href} className={linkClasses}>
                  {phone.display}
                </a>
              </ContactItem>
              <ContactItem icon="mail">
                <a href={`mailto:${email}`} className={linkClasses}>
                  {email}
                </a>
              </ContactItem>
              <ContactItem icon="mapPin">
                <address className="not-italic">
                  {address.street}
                  <br />
                  {address.locality}
                </address>
              </ContactItem>
            </ul>
          </FooterColumn>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-sm sm:flex-row">
          <p>
            &copy; <CurrentYear /> {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#main"
            className="inline-flex items-center gap-2 font-medium text-white/80 transition-colors hover:text-white"
          >
            Back to top
            <Icon name="arrowRight" className="size-4 -rotate-90" />
          </a>
        </Container>
      </div>
    </footer>
  );
}
