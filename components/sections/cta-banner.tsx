import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type CtaBannerProps = {
  title: string;
  description: string;
  cta: { label: string; href: string };
  className?: string;
};

export function CtaBanner({ title, description, cta, className }: CtaBannerProps) {
  const { phone } = siteConfig.contact;

  return (
    <section className={cn("bg-white py-16 sm:py-20", className)}>
      <Container>
        <div className="relative isolate overflow-hidden rounded-xl border border-brand-100 bg-brand-50 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
          <span
            aria-hidden
            className="absolute right-0 bottom-0 -z-10 size-24 bg-brand-600 [clip-path:polygon(100%_0,100%_100%,0_100%)] sm:size-32"
          />
          <span
            aria-hidden
            className="absolute right-0 bottom-0 -z-10 size-12 bg-ink-900 [clip-path:polygon(100%_0,100%_100%,0_100%)] sm:size-16"
          />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:pr-16">
            <div className="max-w-xl">
              <h2 className="text-2xl leading-tight font-bold sm:text-3xl">{title}</h2>
              <p className="mt-3 leading-relaxed text-ink-600">{description}</p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <ButtonLink href={cta.href} size="lg" icon="arrowRight">
                {cta.label}
              </ButtonLink>
              <a
                href={phone.href}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-ink-900/20 bg-white px-6 text-[0.9375rem] font-semibold text-ink-900 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-white"
              >
                <Icon name="phone" className="size-4" />
                {phone.display}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
