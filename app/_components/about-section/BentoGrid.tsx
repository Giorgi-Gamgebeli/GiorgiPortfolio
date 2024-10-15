"use client";

import GridBox from "../GridBox";
import BentoGridItem from "./BentoGridItem";
import { useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import useIsMobile from "../../_hooks/useIsMobile";
import {
  initialBentoGridAnimation,
  skipInitialBentoGridAnimation,
} from "@/app/_utils/motion";
// import dynamic from "next/dynamic";
// const DynamicComputerCanvas = dynamic(() => import("./ComputerCanvas"));

function BentoGrid() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [animationHasHappend, setAnimationHasHappend] = useState(false);
  const [wasMobile, setWasMobile] = useState(false);
  const { isMobile } = useIsMobile();

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
    <GridBox
      reactRef={scope}
      className="hidden md:mx-auto md:my-20 md:grid md:h-[700px] md:w-[700px] md:grid-cols-3 md:grid-rows-3 md:gap-2 lg:h-[800px] lg:w-[800px] lg:gap-3"
    >
      <BentoGridItem
        initial={{
          gridColumnStart: 1,
          gridColumnEnd: 3,
          x: -1000,
          opacity: 0,
        }}
        id="cell-1-1-3"
      >
        A dedicated React frontend developer with a strong background in HTML,
        CSS, and JavaScript. I enjoy creating responsive, interactive user
        interfaces that enhance the user experience. My focus is on building
        scalable and modern applications with the latest frontend technologies
        like React, Tailwind CSS, and Next.js.
      </BentoGridItem>
      <BentoGridItem
        initial={{
          y: -700,
          opacity: 0,
          gridColumnStart: 3,
          gridColumnEnd: 4,
        }}
        id="cell-1-3-4"
      >
        With no working experience yet. Learning coding and solving problems in
        frontend for almost a year. Continually increasing and building
        skillset.
      </BentoGridItem>
      <BentoGridItem
        initial={{
          x: -600,
          opacity: 0,
          gridRowStart: 2,
          gridRowEnd: 3,
        }}
        id="cell-2-1-2"
      >
        Building dynamic, responsive and modern single-page applications with
        reusable components. Using advanced features for more efficient, dry,
        readable code.
      </BentoGridItem>

      <BentoGridItem
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
        {/* <DynamicComputerCanvas /> */}ree
      </BentoGridItem>

      <BentoGridItem
        initial={{
          x: 700,
          opacity: 0,
          gridRowStart: 2,
          gridRowEnd: 3,
          gridColumnStart: 3,
          gridColumnEnd: 4,
        }}
        id="cell-2-3-4"
      >
        Developing optimized, scalable web applications. Adding smooth, engaging
        animations to enhance user interactions with framer motion.
      </BentoGridItem>
      <BentoGridItem
        initial={{ y: 700, opacity: 0, gridRowStart: 3, gridRowEnd: 4 }}
        id="cell-3-1-2"
      >
        Journey from learning the foundations of HTML, CSS, and JavaScript, to
        expanding into frameworks like React.
      </BentoGridItem>

      <BentoGridItem
        initial={{
          y: 700,
          opacity: 0,
          gridColumnStart: -3,
          gridColumnEnd: -1,
          gridRowStart: 3,
          gridRowEnd: 4,
        }}
        id="cell-3-2-4"
      >
        I prioritize clean, maintainable code and love incorporating animations
        that make interactions feel more engaging. With a keen eye on
        performance, I work to optimize load times and responsiveness for a
        seamless experience. I&apos;m always excited to learn new techniques and
        push the boundaries of my knowledge!
      </BentoGridItem>
    </GridBox>
  );
}

export default BentoGrid;
