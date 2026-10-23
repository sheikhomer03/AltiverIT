import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  /** Heading level — keeps the document outline correct when reused. */
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-2 text-sm font-semibold",
            isDark ? "text-brand-300" : "text-brand-600",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "text-[1.75rem] leading-tight font-bold sm:text-3xl lg:text-[2.125rem]",
          isDark && "text-white",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed",
            isDark ? "text-ink-400" : "text-ink-500",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
