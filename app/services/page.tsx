import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/sections/page-header";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ServiceDetail } from "@/components/services/service-detail";
import { Icon } from "@/components/ui/icon";
import { services } from "@/content/services";
import { servicesPage } from "@/content/services-page";

export const metadata: Metadata = {
  title: servicesPage.metadata.title,
  description: servicesPage.metadata.description,
};

export default function ServicesPage() {
  const { header, process, cta } = servicesPage;

  return (
    <>
      <PageHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      >
        <nav aria-label="Services on this page" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-md border border-ink-900/10 bg-white px-3.5 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-brand-600 hover:text-brand-700"
                >
                  <Icon name={service.icon} className="size-4 text-brand-600" />
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {services.map((service, index) => (
        <ServiceDetail key={service.slug} service={service} index={index} />
      ))}

      <ProcessSteps {...process} />
      <CtaBanner {...cta} className="pt-0 sm:pt-0" />
    </>
  );
}
