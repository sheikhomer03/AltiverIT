import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { caseStudies, caseStudiesPage } from "@/content/case-studies";

export const metadata: Metadata = {
  title: caseStudiesPage.metadata.title,
  description: caseStudiesPage.metadata.description,
};

export default function CaseStudiesPage() {
  const { header, cta } = caseStudiesPage;

  return (
    <>
      <PageHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ul className="space-y-8">
            {caseStudies.map((study, index) => (
              <li key={study.slug}>
                <CaseStudyCard study={study} reversed={index % 2 === 1} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner {...cta} className="pt-0 sm:pt-0" />
    </>
  );
}
