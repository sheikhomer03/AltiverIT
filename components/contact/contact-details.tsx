import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/icon";
import { contactPage } from "@/content/contact";
import { siteConfig } from "@/lib/site-config";

function DetailRow({
  icon,
  label,
  children,
}: {
  icon: IconName;
  label: string;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-4 border-t border-ink-900/10 py-5 first:border-t-0 first:pt-0">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
        <Icon name={icon} />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-ink-500">{label}</p>
        <div className="mt-0.5 font-medium break-words text-ink-900">{children}</div>
      </div>
    </li>
  );
}

const linkClasses = "transition-colors hover:text-brand-700";

export function ContactDetails() {
  const { phone, email, address, hours, responseTime } = siteConfig.contact;
  const { title, labels } = contactPage.details;

  return (
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="mt-6">
        <DetailRow icon="phone" label={labels.phone}>
          <a href={phone.href} className={linkClasses}>
            {phone.display}
          </a>
        </DetailRow>
        <DetailRow icon="mail" label={labels.email}>
          <a href={`mailto:${email}`} className={linkClasses}>
            {email}
          </a>
        </DetailRow>
        <DetailRow icon="mapPin" label={labels.address}>
          <address className="not-italic">
            {address.street}
            <br />
            {address.locality}
          </address>
          <a
            href={address.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            {labels.directions}
            <Icon name="arrowRight" className="size-3.5 -rotate-45" />
          </a>
        </DetailRow>
        <DetailRow icon="clock" label={labels.hours}>
          {hours}
          <p className="mt-1 text-sm font-normal text-ink-500">{responseTime}</p>
        </DetailRow>
      </ul>
    </div>
  );
}
