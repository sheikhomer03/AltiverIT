import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { FramedImage } from "@/components/ui/framed-image";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutPage } from "@/content/about";

export const metadata: Metadata = {
  title: aboutPage.metadata.title,
  description: aboutPage.metadata.description,
};

export default function AboutPage() {
  const { header, story, stats, purpose, values, cta } = aboutPage;

  return (
    <>
      <PageHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FramedImage
            src={story.image.src}
            alt={story.image.alt}
            accent="left"
            sizes="(min-width: 1280px) 580px, (min-width: 1024px) 45vw, 100vw"
            className="mx-auto w-full max-w-xl lg:max-w-none"
          />

          <div>
            <SectionHeading eyebrow={story.eyebrow} title={story.title} />
            <div className="mt-5 space-y-4 leading-relaxed">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col border-t-2 border-brand-600 pt-4">
                  <dt className="mt-1 text-sm leading-snug text-ink-500">{stat.label}</dt>
                  <dd className="order-first font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          {purpose.map((item) => (
            <article
              key={item.label}
              className="rounded-lg border border-ink-900/10 bg-white p-7 sm:p-9"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <Icon name={item.icon} className="size-5.5" />
                </span>
                <h2 className="text-lg font-bold">{item.label}</h2>
              </div>
              <p className="mt-5 font-display text-xl leading-snug font-semibold text-ink-800 sm:text-[1.375rem]">
                {item.statement}
              </p>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={values.eyebrow} title={values.title} />
          <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.items.map((item) => (
              <li key={item.title}>
                <span className="flex size-11 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <Icon name={item.icon} className="size-5.5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner {...cta} className="pt-0 sm:pt-0" />
    </>
  );
}
