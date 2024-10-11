"use client";

import { initialAnimation } from "@/app/_utils/motion";
import Section from "../Section";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";
import BentoGridItems from "./BentoGridItems";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

function About() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (!isInView) return;
    initialAnimation();
  }, [animate, isInView, scope]);

  return (
    <Section idName="About">
      <SectionSubText>INTRODUCTION</SectionSubText>
      <SectionHeadText>What can i do.</SectionHeadText>

      <div
        ref={scope}
        className="mx-auto my-20 grid h-[800px] w-[800px] grid-cols-3 gap-3"
      >
        <BentoGridItems
          parentInitial={{
            gridColumnStart: 1,
            gridColumnEnd: 3,
          }}
          initial={{
            x: -1000,
            opacity: 0,
            width: "100%",
            height: "100%",
          }}
          id="cell-1-1-3"
        >
          cell-1-1-3
        </BentoGridItems>
        <BentoGridItems
          parentInitial={{
            gridColumnStart: 3,
            gridColumnEnd: 4,
          }}
          initial={{
            y: -700,
            opacity: 0,
          }}
          id="cell-1-3-4"
        >
          cell-1-3-4
        </BentoGridItems>
        <BentoGridItems
          parentInitial={{
            gridRowStart: 2,
            gridRowEnd: 3,
          }}
          initial={{
            x: -600,
            opacity: 0,
          }}
          id="cell-2-1-2"
        >
          cell-2-1-2
        </BentoGridItems>
        <BentoGridItems
          parentInitial={{
            gridColumnStart: 2,
            gridColumnEnd: 3,
            gridRowStart: 2,
            gridRowEnd: 3,
          }}
          initial={{
            x: -1000,
            opacity: 0,
          }}
          id="cell-2-2-3"
        >
          cell-2-2-3
        </BentoGridItems>
        <BentoGridItems
          parentInitial={{
            gridRowStart: 2,
            gridRowEnd: 3,
            gridColumnStart: 3,
            gridColumnEnd: 4,
          }}
          initial={{ x: 700, opacity: 0 }}
          id="cell-2-3-4"
        >
          cell-2-3-4
        </BentoGridItems>
        <BentoGridItems
          initial={{ y: 700, opacity: 0 }}
          parentInitial={{
            gridRowStart: 3,
            gridRowEnd: 4,
          }}
          id="cell-3-1-2"
        >
          cell-3-1-2
        </BentoGridItems>

        <BentoGridItems
          parentInitial={{
            gridColumnStart: -3,
            gridColumnEnd: -1,
            gridRowStart: 3,
            gridRowEnd: 4,
          }}
          initial={{
            width: "100%",
            height: "100%",
            y: 700,
            opacity: 0,
          }}
          id="cell-3-2-4"
        >
          cell-3-2-4
        </BentoGridItems>
      </div>
    </Section>
  );
}

export default About;
