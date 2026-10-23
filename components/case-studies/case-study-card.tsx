import Image from "next/image";
import type { CaseStudy } from "@/content/case-studies";
import { caseStudiesPage } from "@/content/case-studies";
import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  study: CaseStudy;
  /** Places the image on the right on desktop. */
  reversed?: boolean;
};

export function CaseStudyCard({ study, reversed = false }: CaseStudyCardProps) {
  const { labels } = caseStudiesPage;

  return (
    <article
      id={study.slug}
      className="grid overflow-hidden rounded-lg border border-ink-900/10 bg-white lg:grid-cols-12"
    >
      <div
        className={cn(
          "relative aspect-16/9 bg-surface-strong lg:col-span-5 lg:aspect-auto lg:min-h-full",
          reversed && "lg:order-2",
        )}
      >
        <Image
          src={study.image.src}
          alt={study.image.alt}
          fill
          sizes="(min-width: 1280px) 500px, (min-width: 1024px) 40vw, 100vw"
          placeholder="blur"
          className="object-cover"
        />
      </div>

      <div className="p-6 sm:p-8 lg:col-span-7 lg:p-10">
        <ul className="flex flex-wrap gap-2">
          {[study.industry, study.service].map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink-700"
            >
              {tag}
            </li>
          ))}
        </ul>

        <p className="mt-5 text-sm text-ink-500">
          <span className="sr-only">{labels.client}: </span>
          {study.client}
        </p>
        <h2 className="mt-1 text-2xl leading-snug font-bold">{study.title}</h2>
        <p className="mt-3 leading-relaxed text-ink-500">{study.summary}</p>

        <h3 className="sr-only">{labels.results}</h3>
        <dl className="mt-7 grid gap-6 sm:grid-cols-2">
          {study.results.map((result) => (
            <div key={result.label} className="flex flex-col border-t-2 border-brand-600 pt-4">
              <dt className="mt-1 text-sm leading-snug text-ink-600">{result.label}</dt>
              <dd className="order-first font-display text-3xl font-extrabold text-ink-900">
                {result.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
