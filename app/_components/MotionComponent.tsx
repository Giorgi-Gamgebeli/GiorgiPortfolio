"use client";

import { AnimationScope, MotionProps, motion } from "framer-motion";
import React from "react";

type MotionDivTypes = {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  reactRef?: AnimationScope;
  id?: string;
  onClick?: () => void;
} & MotionProps;

// To return motion.anyHtmlTag, becouse i dont want to make something like entire home page client side + its flexible, i know it hurts your eyes but it works :D
function MotionComponent({
  as: component = "div",
  children,
  className,
  reactRef,
  id,
  onClick,
  ...rest
}: MotionDivTypes) {
  const MotionComponent = motion[
    component as keyof typeof motion
  ] as React.ElementType;

  return (
    <MotionComponent
      id={id}
      onClick={onClick}
      ref={reactRef}
      className={className}
      viewport={{ once: true }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}

export default MotionComponent;
