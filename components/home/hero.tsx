import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { CornerAccent } from "@/components/ui/corner-accent";
import { FramedImage } from "@/components/ui/framed-image";
import { Icon } from "@/components/ui/icon";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-surface">
      <CornerAccent />

      <Container className="grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="motion-safe:animate-fade-up lg:col-span-6">
          <h1 className="text-[2.25rem] leading-[1.12] font-extrabold sm:text-[2.75rem] lg:text-5xl">
            {hero.title.lead}{" "}
            <span className="text-brand-600">{hero.title.highlight}</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-500 sm:text-[1.0625rem]">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={hero.primaryCta.href} size="lg" icon="arrowRight">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} size="lg" variant="outline">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <ul className="mt-9 flex flex-col gap-2 text-sm text-ink-700 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {hero.highlights.map((label) => (
              <li key={label} className="inline-flex items-center gap-2">
                <Icon name="check" className="size-4 text-brand-600" strokeWidth={2.5} />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-xl motion-safe:animate-fade-up motion-safe:[animation-delay:150ms] lg:col-span-6 lg:max-w-none lg:pl-6">
          <FramedImage
            src={hero.image.src}
            alt={hero.image.alt}
            sizes="(min-width: 1280px) 580px, (min-width: 1024px) 46vw, (min-width: 640px) 576px, 100vw"
            eager
          />
        </div>
      </Container>
    </section>
  );
}
