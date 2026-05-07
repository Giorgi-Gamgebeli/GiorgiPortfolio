"use client";

import { motion } from "framer-motion";
import Section from "../Section";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";
import SectionMini from "../SectionMini";
import MotionComponent from "../MotionComponent";
import { textVariant } from "@/app/_utils/motion";
import { experiences } from "@/app/_utils/constants";
import { ExperienceDot } from "./ExperienceDot";
import { ExperienceCard } from "./ExperienceCard";

const CARD_GAP = 500;

function Experience() {
  const TOTAL_HEIGHT = experiences.length * CARD_GAP;

  return (
    <Section idName="experience" viewThreshold={0.1}>
      <MotionComponent
        initial="hidden"
        whileInView="show"
        variants={textVariant(0.5)}
        className="mb-10"
      >
        <SectionSubText>EXPERIENCE</SectionSubText>
        <SectionHeadText>Work Experience.</SectionHeadText>
        <SectionMini>My professional journey.</SectionMini>
      </MotionComponent>

      <div className="relative mt-20 flex w-full max-w-4xl px-2 md:px-4">
        <div
          className="relative mr-8 w-[2px] md:mr-12"
          style={{ height: `${TOTAL_HEIGHT + 600}px` }}
        >
          <div
            className="absolute inset-0 bg-slate-200 dark:bg-white/10"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, black 2%, black 80%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 2%, black 80%, transparent)",
            }}
          />

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.45, 0.05, 0.55, 0.95] }}
            className="absolute inset-0 origin-top bg-blue-500"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, black 2%, black 80%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 2%, black 80%, transparent)",
            }}
          />

          {experiences.map((exp, index) => (
            <ExperienceDot
              key={`dot-${exp.title}`}
              index={index}
              targetTop={(index + 1) * CARD_GAP - CARD_GAP / 2}
            />
          ))}
        </div>

        <div className="relative flex-1">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={`card-${exp.title}`}
              experience={exp}
              index={index}
              targetTop={(index + 1) * CARD_GAP - CARD_GAP / 2}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Experience;
