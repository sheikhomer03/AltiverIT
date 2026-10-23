import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export type ProcessStep = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  eyebrow?: string;
  title: string;
  steps: ProcessStep[];
  className?: string;
};

export function ProcessSteps({ eyebrow, title, steps, className }: ProcessStepsProps) {
  return (
    <section className={cn("bg-white py-16 sm:py-20", className)}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />

        <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-brand-600 pt-5">
              <span className="text-sm font-semibold text-brand-600">
                Step {index + 1}
              </span>
              <h3 className="mt-1.5 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-500">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
