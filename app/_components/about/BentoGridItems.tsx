"use client";

import { motion, MotionProps } from "framer-motion";

type BentoGridItemsTypes = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id: string;
  parentInitial?: object;
} & MotionProps;

function BentoGridItems({
  children,
  className,
  onClick,
  id,
  parentInitial,
  ...rest
}: BentoGridItemsTypes) {
  return (
    <motion.div
      id={`${id}-parent`}
      initial={parentInitial}
      className="relative -z-20"
    >
      <motion.div
        id={id}
        onClick={onClick}
        className={`h-full rounded-2xl border border-black/5 border-gray-300 bg-white p-4 shadow-md dark:border-transparent dark:bg-darkTertiary dark:text-white dark:shadow-none ${className}`}
        {...rest}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default BentoGridItems;
