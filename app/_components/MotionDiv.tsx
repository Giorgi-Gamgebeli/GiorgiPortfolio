"use client";
import { motion } from "framer-motion";
import React from "react";

type MotionDivTypes = {
  children: React.ReactNode;
} & React.ComponentProps<typeof motion.div>;

function MotionDiv({ children, ...rest }: MotionDivTypes) {
  return (
    <motion.div {...rest} viewport={{ once: true }}>
      {children}
    </motion.div>
  );
}

export default MotionDiv;
