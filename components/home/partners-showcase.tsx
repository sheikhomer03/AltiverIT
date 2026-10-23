import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { partnersIntro } from "@/content/home";
import { partners } from "@/content/partners";

export function PartnersShowcase() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={partnersIntro.eyebrow}
            title={partnersIntro.title}
            className="max-w-3xl"
          />
          <ButtonLink
            href={partnersIntro.cta.href}
            variant="outline"
            icon="arrowRight"
            className="self-start md:self-auto"
          >
            {partnersIntro.cta.label}
          </ButtonLink>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-surface-strong bg-surface-strong sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="group flex h-24 items-center justify-center bg-white px-6 sm:h-28"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                sizes="140px"
                className="max-h-8 w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 sm:max-h-9 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
