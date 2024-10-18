"use client";

// to use dynamic you have to import in "use client" file or component first to actually use in server side components
import dynamic from "next/dynamic";

export const DynamicStarsCanvas = dynamic(
  () => import("../_components/contact-section/StarsCanvas"),
  {
    ssr: false,
  },
);

export const DynamicEarthCanvas = dynamic(
  () => import("../_components/contact-section/EarthCanvas"),
  {
    ssr: false,
  },
);

export const DynamicComputerCanvas = dynamic(
  () => import("../_components/about-section/ComputerCanvas"),
  {
    ssr: false,
  },
);
