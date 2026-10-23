import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { FramedImage } from "@/components/ui/framed-image";
import { Icon } from "@/components/ui/icon";
import { partnersInCategory } from "@/content/partners";
import type { Service } from "@/content/services";
import { servicesPage } from "@/content/services-page";
import { cn } from "@/lib/utils";

type ServiceDetailProps = {
  service: Service;
  index: number;
};

/** One full-width block per service; image side and background alternate. */
export function ServiceDetail({ service, index }: ServiceDetailProps) {
  const reversed = index % 2 === 1;
  const brands = partnersInCategory(service.partnerCategory);
  const { labels } = servicesPage;

  return (
    <section
      id={service.slug}
      aria-labelledby={`${service.slug}-title`}
      className={cn("py-16 sm:py-20", reversed ? "bg-surface" : "bg-white")}
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FramedImage
          src={service.image.src}
          alt={service.image.alt}
          accent={reversed ? "left" : "right"}
          sizes="(min-width: 1280px) 580px, (min-width: 1024px) 45vw, 100vw"
          className={cn("mx-auto w-full max-w-xl lg:max-w-none", reversed && "lg:order-2")}
        />

        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-md bg-brand-50 text-brand-600">
              <Icon name={service.icon} className="size-5.5" />
            </span>
            <span className="text-sm font-semibold text-brand-600">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h2
            id={`${service.slug}-title`}
            className="mt-5 text-[1.75rem] leading-tight font-bold sm:text-3xl"
          >
            {service.title}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-500">{service.details}</p>

          <h3 className="mt-7 text-base font-bold">{labels.included}</h3>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {service.included.map((item) => (
              <li key={item} className="flex gap-2.5 text-[0.9375rem] text-ink-800">
                <Icon name="check" className="mt-1 size-4 text-brand-600" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>

          {brands.length > 0 ? (
            <div className="mt-7 border-t border-ink-900/10 pt-6">
              <h3 className="text-sm font-semibold text-ink-500">{labels.brands}</h3>
              <ul className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-4">
                {brands.map((brand) => (
                  <li key={brand.name}>
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      sizes="120px"
                      className="h-7 w-auto max-w-28 object-contain"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <ButtonLink href="/contact" icon="arrowRight" className="mt-8">
            {labels.cta}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
