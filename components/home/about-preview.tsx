import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { FramedImage } from "@/components/ui/framed-image";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { about } from "@/content/home";

export function AboutPreview() {
  return (
    <section className="overflow-hidden bg-surface py-16 sm:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FramedImage
          src={about.image.src}
          alt={about.image.alt}
          accent="left"
          sizes="(min-width: 1280px) 580px, (min-width: 1024px) 45vw, 100vw"
          className="mx-auto w-full max-w-xl lg:max-w-none"
        />

        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />

          <div className="mt-5 space-y-4 leading-relaxed">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {about.values.map((value) => (
              <li
                key={value}
                className="flex items-center gap-2.5 text-[0.9375rem] font-medium text-ink-800"
              >
                <Icon name="check" className="size-4 text-brand-600" strokeWidth={2.5} />
                {value}
              </li>
            ))}
          </ul>

          <ButtonLink
            href={about.cta.href}
            variant="outline"
            icon="arrowRight"
            className="mt-8"
          >
            {about.cta.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
