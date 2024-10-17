"use client";

import { MotionProps } from "framer-motion";
import MotionComponent from "../MotionComponent";
import useIsMobile from "@/app/_hooks/useIsMobile";

type BentoGridCellTypes = {
  children: React.ReactNode;
  className?: string;
  id?: string;
} & MotionProps;

function BentoGridCell({
  children,
  className,
  id,
  ...rest
}: BentoGridCellTypes) {
  const { isMobile } = useIsMobile();

  return (
    // seperating them with ids is important otherwise animation wouldnt work becouse framer doesnt support grid animations
    <MotionComponent
      id={`${id}-parent`}
      className="relative"
      whileInView={isMobile ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={isMobile ? { delay: 0.5 } : {}}
      {...rest}
    >
      <MotionComponent
        id={id}
        className={`overflow-hidden hyphens-auto rounded-2xl border border-black/5 border-gray-300 bg-white p-4 font-normal shadow-md dark:border-transparent dark:bg-darkTertiary dark:text-white dark:shadow-none md:text-base md:leading-relaxed md:tracking-wider lg:text-lg ${className}`}
        initial={{
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </MotionComponent>
    </MotionComponent>
  );
}

export default BentoGridCell;
