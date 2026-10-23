"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { Icon } from "@/components/ui/icon";
import type { ExpertiseItem } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * Disclosure list paired with an image panel: opening an item swaps the
 * photo. Image sits on top on mobile and beside the list on desktop.
 */
export function ExpertiseAccordion({ items }: { items: ExpertiseItem[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
      <div className="relative isolate lg:order-2 lg:col-span-6">
        <span
          aria-hidden
          className="absolute -right-3 -bottom-3 -z-10 h-1/2 w-1/2 rounded-lg bg-brand-600 sm:-right-4 sm:-bottom-4"
        />
        <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-surface-strong">
          {items.map((item, index) => (
            <Image
              key={item.title}
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw"
              placeholder="blur"
              aria-hidden={index !== active}
              className={cn(
                "object-cover transition-opacity duration-500",
                index === active ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>
      </div>

      <ul className="space-y-2 lg:order-1 lg:col-span-6">
        {items.map((item, index) => {
          const isActive = index === active;
          const buttonId = `${baseId}-button-${index}`;
          const panelId = `${baseId}-panel-${index}`;

          return (
            <li
              key={item.title}
              className={cn(
                "rounded-lg border transition-colors duration-300",
                isActive
                  ? "border-ink-900/10 bg-white shadow-sm"
                  : "border-transparent hover:bg-white/60",
              )}
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  onClick={() => setActive(index)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                >
                  <span
                    className={cn(
                      "text-sm font-semibold tabular-nums transition-colors",
                      isActive ? "text-brand-600" : "text-ink-400",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-lg font-bold">{item.title}</span>
                  <Icon
                    name="chevronRight"
                    className={cn(
                      "size-4 transition-transform duration-300",
                      isActive ? "rotate-90 text-brand-600" : "text-ink-400",
                    )}
                  />
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={cn(
                  "grid transition-[grid-template-rows] duration-300",
                  isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden" inert={!isActive}>
                  <div className="px-5 pb-5 sm:pl-14">
                    <p className="leading-relaxed text-ink-500">{item.description}</p>
                    <ul className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-[0.9375rem] text-ink-800"
                        >
                          <Icon
                            name="check"
                            className="mt-1 size-4 text-brand-600"
                            strokeWidth={2.5}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
