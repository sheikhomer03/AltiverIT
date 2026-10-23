"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { siteConfig, type NavItem } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { isActivePath } from "./nav-links";

export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();

  // Close on Escape and lock page scroll while the panel is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-11 items-center justify-center rounded-md text-ink-900 transition-colors hover:bg-surface"
      >
        <Icon name={open ? "close" : "menu"} className="size-6" />
      </button>

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={close}
        className={cn(
          "fixed inset-0 top-(--header-height) z-40 bg-ink-950/40 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Panel */}
      <nav
        id={panelId}
        aria-label="Mobile"
        inert={!open}
        className={cn(
          "fixed inset-x-0 top-(--header-height) z-50 max-h-[calc(100dvh-var(--header-height))] overflow-y-auto border-t border-surface-strong bg-white shadow-xl transition-[opacity,translate] duration-300",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <ul className="px-4 py-3 sm:px-6">
          {items.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between border-b border-surface py-3.5 text-base font-medium",
                    active ? "text-brand-700" : "text-ink-800",
                  )}
                >
                  {item.label}
                  <Icon name="chevronRight" className="size-4 text-ink-400" />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="bg-surface px-4 py-5 sm:px-6">
          <p className="text-sm text-ink-500">Let&apos;s talk</p>
          <a
            href={siteConfig.contact.phone.href}
            className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-brand-600"
          >
            <Icon name="phone" className="size-4" />
            {siteConfig.contact.phone.display}
          </a>
        </div>
      </nav>
    </div>
  );
}
