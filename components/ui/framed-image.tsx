import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type FramedImageProps = {
  src: StaticImageData;
  alt: string;
  /** Side the solid accent block sits on. */
  accent?: "left" | "right";
  sizes?: string;
  /** Load eagerly with high priority — use for above-the-fold images only. */
  eager?: boolean;
  className?: string;
};

/** Photo with a solid brand block offset behind one corner. */
export function FramedImage({
  src,
  alt,
  accent = "right",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  eager = false,
  className,
}: FramedImageProps) {
  return (
    <div className={cn("relative isolate", className)}>
      <span
        aria-hidden
        className={cn(
          "absolute -bottom-3 -z-10 h-1/2 w-1/2 rounded-lg bg-brand-600 sm:-bottom-4",
          accent === "right" ? "-right-3 sm:-right-4" : "-left-3 sm:-left-4",
        )}
      />
      <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-surface-strong">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          placeholder="blur"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="object-cover"
        />
      </div>
    </div>
  );
}
