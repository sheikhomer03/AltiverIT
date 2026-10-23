import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
import { mainNav, siteConfig } from "@/lib/site-config";
import { MobileMenu } from "./mobile-menu";
import { DesktopNavLinks } from "./nav-links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-(--header-height) border-b border-ink-900/5 bg-white">
      <Container className="flex h-full items-center justify-between gap-6">
        <Logo eager />

        <nav aria-label="Main" className="hidden lg:block">
          <DesktopNavLinks items={mainNav} />
        </nav>

        <div className="flex items-center gap-2 sm:gap-5">
          <a
            href={siteConfig.contact.phone.href}
            className="hidden items-center gap-2 text-sm font-semibold text-ink-800 transition-colors hover:text-brand-700 xl:flex"
          >
            <Icon name="phone" className="size-4 text-brand-600" />
            {siteConfig.contact.phone.display}
          </a>
          <ButtonLink href="/contact" className="hidden sm:inline-flex">
            Get a quote
          </ButtonLink>
          <MobileMenu items={mainNav} />
        </div>
      </Container>
    </header>
  );
}
