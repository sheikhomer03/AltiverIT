import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { partnersPage } from "@/content/partners-page";
import { partnerCategories, partners } from "@/content/partners";

const stats = [
  { value: partners.length, label: "Authorized brands" },
  { value: partnerCategories.length, label: "Product categories" },
];

export function PartnerBenefits() {
  const { benefits } = partnersPage;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow={benefits.eyebrow}
            title={benefits.title}
            description={benefits.description}
          />
          <dl className="mt-8 grid max-w-sm grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col border-t-2 border-brand-600 pt-4">
                <dt className="text-sm text-ink-500">{stat.label}</dt>
                <dd className="order-first font-display text-4xl font-extrabold text-ink-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-7">
          {benefits.items.map((item) => (
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
  );
}
