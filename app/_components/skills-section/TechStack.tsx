"use client";

import {
  childVariant,
  skillsFloatVariants,
  staggerContainer,
} from "@/app/_utils/motion";
import { getRandomNumber } from "@/app/_utils/smallUtils";
import { Icon } from "@iconify/react/dist/iconify.js";
import MotionComponent from "../MotionComponent";

type TechStackProps = {
  technologies: {
    name: string;
    iconify: string;
    color: string;
  }[];
};

function TechStack({ technologies }: TechStackProps) {
  return (
    <MotionComponent
      variants={staggerContainer(0.15)}
      initial="hidden"
      whileInView="show"
      className="grid grid-cols-2 gap-y-20 pb-20 pt-14 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
    >
      {technologies.map(({ name, iconify, color }) => (
        <div key={name}>
          <MotionComponent
            animate={skillsFloatVariants[getRandomNumber()]}
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <MotionComponent
              variants={childVariant}
              className={`flex flex-col items-center gap-1 self-start text-gray-600 ${color}`}
            >
              <Icon icon={iconify} className="size-10" />
              <p className="text-sm font-medium md:text-base lg:text-lg">
                {name}
              </p>
            </MotionComponent>
          </MotionComponent>
        </div>
      ))}
    </MotionComponent>
  );
}

export default TechStack;
