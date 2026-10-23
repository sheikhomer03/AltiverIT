import type { Metadata } from "next";
import { PartnerBenefits } from "@/components/partners/partner-benefits";
import { PartnerDirectory } from "@/components/partners/partner-directory";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { partnersPage } from "@/content/partners-page";
import { partnerCategories, partners } from "@/content/partners";

export const metadata: Metadata = {
  title: partnersPage.metadata.title,
  description: partnersPage.metadata.description,
};

export default function PartnersPage() {
  const { header, directory, cta } = partnersPage;

  return (
    <>
      <PageHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      />

      <PartnerBenefits />

      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={directory.eyebrow} title={directory.title} />
          <div className="mt-8">
            <PartnerDirectory
              partners={partners}
              categories={partnerCategories}
              allLabel={directory.allLabel}
            />
          </div>
        </Container>
      </section>

      <CtaBanner {...cta} />
    </>
  );
}
