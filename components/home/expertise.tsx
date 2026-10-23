import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { expertise, expertiseIntro } from "@/content/home";
import { ExpertiseAccordion } from "./expertise-accordion";

export function Expertise() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={expertiseIntro.eyebrow}
          title={expertiseIntro.title}
          description={expertiseIntro.description}
        />
        <div className="mt-10">
          <ExpertiseAccordion items={expertise} />
        </div>
      </Container>
    </section>
  );
}
