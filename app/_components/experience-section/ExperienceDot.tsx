"use client";

import { motion } from "framer-motion";

type ExperienceDotProps = Readonly<{
  index: number;
  targetTop: number;
}>;

export function ExperienceDot({ index, targetTop }: ExperienceDotProps) {
  return (
    <motion.div
      initial={{ top: 0, opacity: 0 }}
      whileInView={{ top: `${targetTop}px`, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9 + index * 0.3,
        ease: [0.45, 0.05, 0.55, 0.95],
      }}
      className="absolute z-20 flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] dark:border-[#030014]"
    >
      <div className="size-2 rounded-full bg-white" />
    </motion.div>
  );
}
