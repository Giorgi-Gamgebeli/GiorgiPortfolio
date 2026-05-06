"use client";

import { motion } from "framer-motion";
import Section from "../Section";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";
import SectionMini from "../SectionMini";
import MotionComponent from "../MotionComponent";
import { textVariant } from "@/app/_utils/motion";
import { experiences } from "@/app/_utils/constants";

function Experience() {
  const exp = experiences[0];

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
        {/* The Vertical Line and Ball Container */}
        <div className="relative mr-8 h-[600px] w-[2px] md:mr-12">
          {/* Background Line (Ghost) */}
          <div className="absolute inset-0 bg-slate-200 dark:bg-white/10" />

          {/* Animated Progress Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.45, 0.05, 0.55, 0.95] }}
            className="absolute inset-0 origin-top bg-blue-500"
          />

          {/* Animated Ball */}
          <motion.div
            initial={{ top: 0, opacity: 0 }}
            whileInView={{ top: "300px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.45, 0.05, 0.55, 0.95] }}
            className="absolute z-20 flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] dark:border-[#030014]"
          >
            <div className="size-2 rounded-full bg-white" />
          </motion.div>
        </div>

        {/* The Card Container */}
        <div className="relative flex-1">
          <div className="absolute top-[300px] w-full -translate-y-1/2">
            <MotionComponent
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.9,
              }}
              className="relative rounded-2xl border border-slate-200/50 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#100d25] md:p-8"
            >
              {/* Connector Arrow */}
              <div className="absolute left-[-8px] top-1/2 size-4 -translate-y-1/2 rotate-45 border-b border-l border-slate-200/50 bg-white dark:border-white/10 dark:bg-[#100d25]" />

              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white md:text-3xl">
                  {exp.title}
                </h3>
                <p className="text-base font-semibold text-blue-500 md:text-lg">
                  {exp.company}
                </p>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 md:text-sm">
                  {exp.date}
                </p>
                <div className="my-4 h-[1px] w-full bg-gradient-to-r from-slate-200 via-transparent to-transparent dark:from-white/10 md:my-6" />
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
                  {exp.description}
                </p>
              </div>
            </MotionComponent>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Experience;
