import { textVariant } from "@/app/_utils/motion";
import React from "react";
import MotionComponent from "../MotionComponent";

function SkillsHeading({ children }: { children: React.ReactNode }) {
  return (
    <MotionComponent
      initial="hidden"
      whileInView="show"
      as="h3"
      variants={textVariant(0.5)}
      className="text-xl font-black sm:text-2xl"
    >
      {children}
    </MotionComponent>
  );
}

export default SkillsHeading;
