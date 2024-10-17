"use client";

import { MotionProps } from "framer-motion";
import MotionComponent from "../MotionComponent";
import useIsMobile from "@/app/_hooks/useIsMobile";
import { bentoGridText } from "@/app/_utils/constants";

type BentoGridItemsTypes = {
  children?: React.ReactNode;
  id?: string;
} & MotionProps;

function BentoGridCell({
  children,
  id,
  initial,
  animate,
}: BentoGridItemsTypes) {
  const { isMobile } = useIsMobile();

  // im using this as initial for mobile
  const mobileInitial = animate
    ? animate
    : {
        gridColumnStart: "auto",
        gridColumnEnd: "auto",
        gridRowStart: "auto",
        gridRowEnd: "auto",
      };

  return (
    // framer doesnt support grid animations, had to seperate them with ids
    <MotionComponent
      id={`${id}-parent`}
      className="relative"
      initial={initial}
      // WARNING: not animation used above 768px
      animate={isMobile ? mobileInitial : {}}
    >
      <MotionComponent
        id={id}
        className={`overflow-hidden hyphens-auto rounded-2xl border border-black/5 border-gray-300 bg-white p-4 font-normal shadow-md dark:border-transparent dark:bg-darkTertiary dark:text-white dark:shadow-none md:text-base md:leading-relaxed md:tracking-wider lg:text-lg`}
        initial={{
          width: "100%",
          height: "100%",
        }}
      >
        {children ? children : bentoGridText[id as keyof typeof bentoGridText]}
      </MotionComponent>
    </MotionComponent>
  );
}

export default BentoGridCell;
