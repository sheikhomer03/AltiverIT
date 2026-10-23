import type { Metadata } from "next";
import { ContactDetails } from "@/components/contact/contact-details";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { contactPage } from "@/content/contact";

export const metadata: Metadata = {
  title: contactPage.metadata.title,
  description: contactPage.metadata.description,
};

export default function ContactPage() {
  const { header, form } = contactPage;

  return (
    <>
      <PageHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ContactDetails />
          </div>

          <div className="relative rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
            <h2 className="text-xl font-bold">{form.title}</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
