import { AboutPreview } from "@/components/home/about-preview";
import { Expertise } from "@/components/home/expertise";
import { Hero } from "@/components/home/hero";
import { PartnersShowcase } from "@/components/home/partners-showcase";
import { ServicesOverview } from "@/components/home/services-overview";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ctaBanner, howItWorks } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersShowcase />
      <AboutPreview />
      <ServicesOverview />
      <Expertise />
      <ProcessSteps {...howItWorks} />
      <CtaBanner {...ctaBanner} className="pt-0 sm:pt-0" />
    </>
  );
}
