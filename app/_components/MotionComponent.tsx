"use client";

import { AnimationScope, MotionProps, motion } from "framer-motion";
import React from "react";
import useIsMobile from "../_hooks/useIsMobile";

type MotionDivProps = {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  reactRef?: AnimationScope;
  id?: string;
  onClick?: () => void;
  dontDisableFramerForMobile?: boolean;
  ariaLabel?: string;
} & MotionProps;

// To return motion.anyHtmlTag, dont want to make entire page client side + its flexible, to turn off all animations for mobile
function MotionComponent({
  as: component = "div",
  children,
  className,
  reactRef,
  id,
  onClick,
  ariaLabel,
  dontDisableFramerForMobile = false,
  ...rest
}: MotionDivProps) {
  const { isMobile } = useIsMobile();

  const MotionComponent = motion[
    component as keyof typeof motion
  ] as React.ElementType;

  const Component = component as React.ElementType;

  return (
    <>
      {!isMobile || dontDisableFramerForMobile ? (
        <MotionComponent
          id={id}
          onClick={onClick}
          ref={reactRef}
          className={className}
          aria-label={ariaLabel}
          viewport={{ once: true }}
          {...rest}
        >
          {children}
        </MotionComponent>
      ) : (
        <Component
          id={id}
          onClick={onClick}
          ref={reactRef}
          className={className}
          aria-label={ariaLabel}
        >
          {children}
        </Component>
      )}
    </>
  );
}

export default MotionComponent;
