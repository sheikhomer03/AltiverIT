import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./icon";

type Variant = "primary" | "outline" | "outlineLight" | "white";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  outline:
    "border border-ink-900/20 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-white",
  outlineLight:
    "border border-white/30 text-white hover:border-white hover:bg-white hover:text-ink-900",
  white: "bg-white text-ink-900 hover:bg-brand-50",
};

const sizeClasses: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[0.9375rem]",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
  /** Optional icon rendered after the label. */
  icon?: IconName;
  /** Optional icon rendered before the label. */
  leadingIcon?: IconName;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  icon,
  leadingIcon,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {leadingIcon ? <Icon name={leadingIcon} className="size-4" /> : null}
      {children}
      {icon ? (
        <Icon
          name={icon}
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      ) : null}
    </Link>
  );
}
