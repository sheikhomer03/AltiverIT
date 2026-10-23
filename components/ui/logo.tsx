import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import logoLight from "@/assets/images/logo-light.png";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  eager?: boolean;
  /** "light" swaps in the version with white lettering for dark backgrounds. */
  tone?: "default" | "light";
};

export function Logo({ className, eager = false, tone = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn("inline-flex shrink-0", className)}
    >
      <Image
        src={tone === "light" ? logoLight : logo}
        alt={siteConfig.name}
        sizes="160px"
        loading={eager ? "eager" : "lazy"}
        className="h-10 w-auto sm:h-12"
      />
    </Link>
  );
}
