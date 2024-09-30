"use client";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";

function ScrollFloatingAnimation({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.5,
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, (value) => {
    return (value - scrollYProgress.get()) * 40;
  });

  return (
    <motion.div
      style={{ y }}
      className="mx-auto mt-5 flex max-w-[90%] items-center justify-between rounded-3xl border-white bg-white/90 px-8 py-2 font-medium shadow-lg shadow-slate-300 backdrop-blur-sm dark:bg-[#0c122c7c] dark:shadow-sm dark:shadow-slate-800 dark:backdrop-blur-md"
    >
      {children}
    </motion.div>
  );
}

export default ScrollFloatingAnimation;
