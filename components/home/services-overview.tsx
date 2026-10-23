import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { servicesIntro } from "@/content/home";
import { serviceHref, services, type Service } from "@/content/services";

/** Makes the whole card clickable through the link inside it. */
const stretchedLink = "after:absolute after:inset-0 after:rounded-lg";

function FeaturedServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative isolate flex h-full min-h-104 flex-col justify-end overflow-hidden rounded-lg p-6 sm:p-8">
      <Image
        src={service.image.src}
        alt={service.image.alt}
        fill
        sizes="(min-width: 1024px) 400px, 100vw"
        placeholder="blur"
        className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-t from-ink-950 via-ink-950/75 to-ink-950/5"
      />

      <span className="flex size-11 items-center justify-center rounded-md bg-brand-600 text-white">
        <Icon name={service.icon} className="size-5.5" />
      </span>
      <h3 className="mt-5 text-2xl font-bold text-white">
        <Link href={serviceHref(service.slug)} className={stretchedLink}>
          {service.title}
        </Link>
      </h3>
      <p className="mt-2 leading-relaxed text-white/75">{service.summary}</p>
      <ul className="mt-5 space-y-2">
        {service.highlights.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-[0.9375rem] text-white">
            <Icon name="check" className="size-4 text-brand-300" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300">
        Learn more
        <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </article>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex h-full flex-col rounded-lg border border-ink-900/10 bg-white p-6 transition duration-300 hover:border-brand-600 hover:shadow-lg hover:shadow-ink-900/5">
      <span className="flex size-11 items-center justify-center rounded-md bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
        <Icon name={service.icon} className="size-5.5" />
      </span>
      <h3 className="mt-5 text-lg font-bold">
        <Link href={serviceHref(service.slug)} className={stretchedLink}>
          {service.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-500">
        {service.summary}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {service.highlights.map((item) => (
          <li
            key={item}
            className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink-700"
          >
            {item}
          </li>
        ))}
      </ul>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
        Learn more
        <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </article>
  );
}

function HelpCard() {
  const { helpCard } = servicesIntro;

  return (
    <div className="flex h-full flex-col rounded-lg border border-brand-100 bg-brand-50 p-6">
      <span className="flex size-11 items-center justify-center rounded-md bg-white text-brand-600">
        <Icon name="users" className="size-5.5" />
      </span>
      <h3 className="mt-5 text-lg font-bold">{helpCard.title}</h3>
      <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">
        {helpCard.description}
      </p>
      <ButtonLink href={helpCard.cta.href} icon="arrowRight" className="mt-6 self-start">
        {helpCard.cta.label}
      </ButtonLink>
    </div>
  );
}

export function ServicesOverview() {
  const [featured, ...rest] = services;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={servicesIntro.eyebrow}
            title={servicesIntro.title}
            description={servicesIntro.description}
          />
          <ButtonLink
            href={servicesIntro.cta.href}
            variant="outline"
            icon="arrowRight"
            className="shrink-0 self-start md:self-auto"
          >
            {servicesIntro.cta.label}
          </ButtonLink>
        </div>

        {/* Bento: featured service spans two rows on desktop, the rest fill a 2×2 grid. */}
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <li className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <FeaturedServiceCard service={featured} />
          </li>
          {rest.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} />
            </li>
          ))}
          <li>
            <HelpCard />
          </li>
        </ul>
      </Container>
    </section>
  );
}
