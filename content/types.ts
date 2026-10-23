import type { StaticImageData } from "next/image";

export type ImageAsset = {
  src: StaticImageData;
  alt: string;
};

export type LinkItem = {
  label: string;
  href: string;
};
