"use client";

import { motion, MotionProps } from "framer-motion";
import React from "react";

type MotionDivTypes = {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
} & MotionProps;

// To return motion.anyHtmlTag, becouse i dont want to make something like entire home page client side + its flexible, i know it hurts your eyes but it works :D
function MotionComponent({
  as: component = "div",
  children,
  className,
  ...rest
}: MotionDivTypes) {
  const MotionComponent = motion[
    component as keyof typeof motion
  ] as React.ElementType;

  return (
    <MotionComponent className={className} {...rest} viewport={{ once: true }}>
      {children}
    </MotionComponent>
  );
}

export default MotionComponent;
