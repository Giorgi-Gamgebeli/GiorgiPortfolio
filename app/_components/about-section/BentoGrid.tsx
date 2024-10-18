"use client";

import BentoGridCell from "./BentoGridCell";
import { useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import useIsMobile from "../../_hooks/useIsMobile";
import {
  initialBentoGridAnimation,
  skipInitialBentoGridAnimation,
} from "@/app/_utils/motion";
import FlexBox from "../FlexBox";
import dynamic from "next/dynamic";
const DynamicComputerCanvas = dynamic(() => import("./ComputerCanvas"), {
  ssr: false,
});

function BentoGrid() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [animationHasHappend, setAnimationHasHappend] = useState(false);
  const [wasMobile, setWasMobile] = useState(false);
  const { isMobile } = useIsMobile();

  console.log("ree");

  useEffect(() => {
    if (isInView && !animationHasHappend) {
      initialBentoGridAnimation();
      setAnimationHasHappend(true);
    }

    if (wasMobile !== isMobile) {
      skipInitialBentoGridAnimation();
      setWasMobile(isMobile);
    }
  }, [animate, isInView, animationHasHappend, wasMobile, isMobile, scope]);

  return (
    // initially flexbox after 450px becomes grid
    <FlexBox
      reactRef={scope}
      className="my-10 flex-col gap-3 xs:my-20 xs:grid xs:grid-cols-2 xs:gap-2 md:mx-auto md:my-20 md:h-[700px] md:w-[700px] md:grid-cols-3 md:grid-rows-3 md:gap-2 lg:h-[800px] lg:w-[800px] lg:gap-3"
    >
      <BentoGridCell
        initial={{
          gridColumnStart: 1,
          gridColumnEnd: 3,
          x: isMobile ? 0 : -1000,
          opacity: isMobile ? 1 : 0,
        }}
        id="cell-1-1-3"
        animate={{
          gridColumnStart: 1,
          gridColumnEnd: 3,
        }}
      />

      <BentoGridCell
        initial={{
          y: isMobile ? 0 : -700,
          opacity: isMobile ? 1 : 0,
          gridColumnStart: 3,
          gridColumnEnd: 4,
        }}
        id="cell-1-3-4"
      />

      <BentoGridCell
        initial={{
          x: -600,
          opacity: 0,
          gridRowStart: 2,
          gridRowEnd: 3,
        }}
        id="cell-2-1-2"
      />

      {!isMobile && (
        <BentoGridCell
          initial={{
            x: -1000,
            opacity: 0,
            gridColumnStart: 2,
            gridColumnEnd: 3,
            gridRowStart: 2,
            gridRowEnd: 3,
          }}
          id="cell-2-2-3"
        >
          <DynamicComputerCanvas />
        </BentoGridCell>
      )}

      <BentoGridCell
        initial={{
          x: 700,
          opacity: 0,
          gridRowStart: 2,
          gridRowEnd: 3,
          gridColumnStart: 3,
          gridColumnEnd: 4,
        }}
        id="cell-2-3-4"
      />

      <BentoGridCell
        initial={{ y: 700, opacity: 0, gridRowStart: 3, gridRowEnd: 4 }}
        id="cell-3-1-2"
      />

      <BentoGridCell
        initial={{
          y: 700,
          opacity: 0,
          gridColumnStart: -3,
          gridColumnEnd: -1,
          gridRowStart: 3,
          gridRowEnd: 4,
        }}
        id="cell-3-2-4"
        animate={{
          gridColumnStart: -3,
          gridColumnEnd: -1,
          gridRowStart: 4,
          gridRowEnd: 5,
        }}
      />
    </FlexBox>
  );
}

export default BentoGrid;
