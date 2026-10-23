import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { CornerAccent } from "@/components/ui/corner-accent";

type PageHeaderProps = {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: string;
  children?: ReactNode;
};

/** Intro band shared by every inner page: eyebrow, h1 and lead text. */
export function PageHeader({ title, description, eyebrow, children }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-surface">
      <CornerAccent />
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-3xl motion-safe:animate-fade-up">
          {eyebrow ? (
            <p className="mb-2 text-sm font-semibold text-brand-600">{eyebrow}</p>
          ) : null}
          <h1 className="text-[2.25rem] leading-[1.12] font-extrabold sm:text-[2.75rem] lg:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-[1.0625rem]">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
