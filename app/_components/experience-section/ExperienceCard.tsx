"use client";

import MotionComponent from "../MotionComponent";
import { experiences } from "@/app/_utils/constants";

type ExperienceCardProps = Readonly<{
  experience: (typeof experiences)[number];
  index: number;
  targetTop: number;
}>;

export function ExperienceCard({
  experience,
  index,
  targetTop,
}: ExperienceCardProps) {
  return (
    <div
      className="absolute w-full -translate-y-1/2"
      style={{ top: `${targetTop}px` }}
    >
      <MotionComponent
        initial={{ opacity: 0, x: -50, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.8 + index * 0.3,
        }}
        className="relative rounded-2xl border border-slate-200/50 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-black-100 md:p-8"
      >
        <div className="absolute left-[-8px] top-1/2 size-4 -translate-y-1/2 rotate-45 border-b border-l border-slate-200/50 bg-white dark:border-white/10 dark:bg-black-100" />

        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white md:text-3xl">
            {experience.title}
          </h3>
          <p className="text-base font-semibold text-blue-500 md:text-lg">
            {experience.company}
          </p>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 md:text-sm">
            {experience.date}
          </p>
          <div className="my-4 h-[1px] w-full bg-gradient-to-r from-slate-200 via-transparent to-transparent dark:from-white/10 md:my-6" />
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
            {experience.description}
          </p>
        </div>
      </MotionComponent>
    </div>
  );
}
