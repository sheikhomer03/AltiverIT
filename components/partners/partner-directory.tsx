"use client";

import Image from "next/image";
import { useState } from "react";
import type { Partner, PartnerCategory } from "@/content/partners";
import { cn } from "@/lib/utils";

type Filter = PartnerCategory | "all";

type PartnerDirectoryProps = {
  partners: Partner[];
  categories: readonly PartnerCategory[];
  allLabel: string;
};

function FilterChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-ink-900 bg-ink-900 text-white"
          : "border-ink-900/10 bg-white text-ink-700 hover:border-ink-900/30",
      )}
    >
      {label}
      <span className={cn("text-xs", active ? "text-white/60" : "text-ink-400")}>
        {count}
      </span>
    </button>
  );
}

export function PartnerDirectory({
  partners,
  categories,
  allLabel,
}: PartnerDirectoryProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all" ? partners : partners.filter((p) => p.category === filter);
  const countFor = (category: PartnerCategory) =>
    partners.filter((p) => p.category === category).length;

  return (
    <div>
      <div
        role="group"
        aria-label="Filter partners by category"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        <FilterChip
          label={allLabel}
          count={partners.length}
          active={filter === "all"}
          onClick={() => setFilter("all")}
        />
        {categories.map((category) => (
          <FilterChip
            key={category}
            label={category}
            count={countFor(category)}
            active={filter === category}
            onClick={() => setFilter(category)}
          />
        ))}
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {visible.length} partners
      </p>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((partner) => (
          <li
            key={partner.name}
            className="flex flex-col rounded-lg border border-ink-900/10 bg-white p-6 transition duration-300 hover:border-brand-600 hover:shadow-lg hover:shadow-ink-900/5"
          >
            <div className="flex h-12 items-center">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                sizes="160px"
                className="max-h-10 w-auto max-w-40 object-contain object-left"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
              <h3 className="text-lg font-bold">{partner.name}</h3>
              <span className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink-700">
                {partner.category}
              </span>
            </div>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-500">
              {partner.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
